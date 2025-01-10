import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance/balance';
import { Transaction } from 'src/app/models/transaction/transaction';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

declare var gapi: any;  // Declare gapi to avoid TypeScript errors

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  balances: Balance[] = [];
  allTransactions: Transaction[] = [];
  transactions: Transaction[] = [];
  segmentValue = 'in';

  constructor(private dbService: TransactionService, private balanceService: BalanceService) { }

  ngOnInit() {
    this.localLoadBalances();
    this.loadTransactions();
    this.filterTransactions();
    this.initializeGoogleAPI();
  }

  // Load or refresh data when the page enters
  ionViewWillEnter() {
    this.localLoadBalances();
    this.loadTransactions();
    this.filterTransactions();
  }


  // Fetch transactions from the DbService
  async loadTransactions() {
    try {
      this.allTransactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }

  async updateTransaction(t: Transaction) {
    try {
      await this.dbService.updateTransaction(t);
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  }

  localLoadBalances() {
    const savedBalances = localStorage.getItem('balances');
    this.balances = savedBalances
      ? JSON.parse(savedBalances)
      : [];
  }

  addBalance(transaction: Transaction) {
    // Add an initial balance if the list is empty
    if (this.balances.length === 0) {
      this.balances.push({
        id: 1,
        date: new Date(),
        time: new Date().toTimeString().split(' ')[0],
        total: 0,
        saved: 0,
        loaned: 0,
        borrowed: 0,
        spent: 0,
        received: 0,
      });
    }

    // Clone the last balance
    const lastBalance = { ...this.balances[this.balances.length - 1] };

    // Update the balance based on the transaction
    lastBalance.date = new Date;
    lastBalance.time = new Date().toTimeString().split(' ')[0];

    if(transaction.type === 'Loan') {
      lastBalance.loaned -= transaction.amount;
      lastBalance.total += transaction.amount;
    }
    
    console.log('Updated balance:', lastBalance);

    // Add the updated balance to the list
    this.balances.push(lastBalance);

    // Save balances to local storage
    localStorage.setItem('balances', JSON.stringify(this.balances));
  }

  markAsReturned(t: Transaction) {
    t.isReturned = true;
    this.addBalance(t);
    this.updateTransaction(t);
  }

  filterTransactions() {
    if (this.segmentValue === 'in') {
      this.transactions = this.allTransactions.filter(x => (x?.type === 'Top-up' || x?.type === 'Borrow' || x?.type === 'Save'));
    } else {
      this.transactions = this.allTransactions.filter(x => (x?.type === 'Loan' || x?.type === 'Spend'));
    }
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }

  // Initialize Google API Client
  initializeGoogleAPI() {
    if (typeof gapi !== 'undefined') {
      gapi.load('client:auth2', () => {
        gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your actual client ID
        }).then(() => {
          console.log('Google API Initialized');
        }).catch((error) => {
          console.error('Error initializing Google API:', error);
        });
      });
    } else {
      console.error('gapi is not loaded');
    }
  }

  // Authenticate user with Google Drive
  authenticate() {
    if (typeof gapi !== 'undefined') {
      gapi.auth2.getAuthInstance().signIn().then(() => {
        console.log('User signed in');
        this.uploadToGoogleDrive();
      }).catch((error) => {
        console.error('Error signing in with Google:', error);
      });
    } else {
      console.error('gapi is not available for authentication');
    }
  }

  // Export transactions to JSON
  exportToJSON() {
    const transactionsJson = JSON.stringify(this.transactions);

    const blob = new Blob([transactionsJson], { type: 'application/json' });
    const fileName = 'transactions_history.json';

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }

  // Upload JSON file to Google Drive
  uploadToGoogleDrive() {
    if (typeof gapi !== 'undefined') {
      const fileContent = JSON.stringify(this.transactions);
      const file = new Blob([fileContent], { type: 'application/json' });

      const metadata = {
        name: 'transactions_history.json', // File name
        mimeType: 'application/json',
      };

      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', file);

      // Insert file into Google Drive
      const request = gapi.client.request({
        path: 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: form,
      });

      request.execute((response) => {
        if (response.id) {
          console.log('File uploaded successfully:', response);
        } else {
          console.error('Error uploading file:', response);
        }
      });
    } else {
      console.error('gapi is not available for uploading to Google Drive');
    }
  }

  // Import data from Google Drive
  importFromGoogleDrive() {
    if (typeof gapi !== 'undefined') {
      const request = gapi.client.drive.files.list({
        q: "name='transactions_history.json'",
        fields: "files(id, name)",
      });

      request.execute((response) => {
        const fileId = response.files[0]?.id;
        if (fileId) {
          const fileRequest = gapi.client.drive.files.get({
            fileId: fileId,
            alt: 'media',
          });

          fileRequest.execute((file) => {
            const importedData = JSON.parse(file);
            console.log('Imported data:', importedData);
            // Handle the imported data (e.g., display in your app or store it)
            this.allTransactions = importedData; // Store the imported data into allTransactions
            this.filterTransactions(); // Re-filter the transactions
          });
        }
      });
    } else {
      console.error('gapi is not available for importing from Google Drive');
    }
  }
}
