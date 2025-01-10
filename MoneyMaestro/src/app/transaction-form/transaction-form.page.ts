import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction';
import { Balance } from '../models/balance/balance';
import { BalanceService } from '../services/balance/balance.service';
import { Contact, Contacts, ContactFieldType } from '@awesome-cordova-plugins/contacts/ngx';
// import { Contacts, Contact, ContactFieldType } from '@ionic-native/contacts/ngx';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.page.html',
  styleUrls: ['./transaction-form.page.scss'],
})
export class TransactionFormPage implements OnInit {
  transactionForm!: FormGroup;
  transactionType: string = ''; // Will hold the type of transaction (Loan, Borrow, etc.)
  balances: Balance[] = [];
  contactList: Contact[] = [];
  transactions: Transaction[] = [];
  errorMessage: string = '';

  constructor(
    private balanceService: BalanceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dbService: TransactionService,
    private contacts: Contacts,
    // private androidPermissions: AndroidPermissions
  ) {}

  ngOnInit() {
    this.getContacts();

    this.route.data.subscribe((data) => {
      this.setTransactionType(data['type']);
    });

    this.transactionForm = this.fb.group({
      id: [1],
      description: ['', Validators.required],
      type: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      time: [new Date().toLocaleTimeString('en-GB', { hour12: false }), Validators.required],
      contact: [''],
      isReturned: [false],
    });

    this.localLoadBalances();

    console.log('balances:', this.balances);
  }

  // Load or refresh data when the page enters
  ionViewWillEnter() {
    this.loadTransactions();
    this.localLoadBalances();
    this.getContacts();
  }


  async setTransactionType(type: string) {
    this.transactionType = type;
    this.transactionForm.patchValue({ type });
  }

  async submitForm() {
    if (this.transactionForm.valid) {
      console.log('Form Submitted:', this.transactionForm.value);

      const formValue = this.transactionForm.value;

      let transaction: Transaction = {
        id: formValue.id,
        description: formValue.description,
        type: formValue.type,
        amount: formValue.amount,
        date: new Date(formValue.date),
        time: formValue.time,
        contact: formValue.contact,
        isReturned: formValue.isReturned,
      };

      console.log('Transaction:', transaction);

      try {
        if(this.isTransactionGood(transaction)) {
        this.addBalance(transaction);

        console.log('Balance added:', this.balances);

        await this.dbService.addTransaction(transaction);

        this.router.navigate(['/']); // Navigate to the desired page
        }else{
          this.errorMessage = 'This person already has a loan that has not been returned';
        }
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    } else {
      console.error('Form is invalid');
      this.errorMessage = 'Please fill in all fields correctly';
    }
  }

  async loadTransactions() {
    try {
      this.transactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error("Error loading transactions:", error);
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
    lastBalance.date = transaction.date;
    lastBalance.time = transaction.time;

    switch (transaction.type) {
      case 'Loan':
        lastBalance.loaned += transaction.amount;
        lastBalance.total -= transaction.amount;
        break;
      case 'Borrow':
        lastBalance.borrowed += transaction.amount;
        lastBalance.total += transaction.amount;
        break;
      case 'Spend':
        lastBalance.spent += transaction.amount;
        lastBalance.total -= transaction.amount;
        break;
      case 'Top-up':
        lastBalance.received += transaction.amount;
        lastBalance.total += transaction.amount;
        break;
    }

    console.log('Updated balance:', lastBalance);

    // Add the updated balance to the list
    this.balances.push(lastBalance);

    // Save balances to local storage
    localStorage.setItem('balances', JSON.stringify(this.balances));
  }

  async cancel() {
    this.router.navigate(['/']); // Navigate to the desired page
  }

  async getContacts() {
    try {
      // Specify the fields to retrieve
      const desiredFields: ContactFieldType[] = ['displayName', 'phoneNumbers'];
      
      const contacts = await this.contacts.find(desiredFields, { multiple: true });
      this.contactList = contacts;
      console.log('Contacts:', this.contactList);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }

  isTransactionGood(t: Transaction) {
    let filtered = this.transactions.filter(x => (x.contact === t.contact && x.isReturned === false && x.type === t.type && x.type === 'Loan'));
    if (filtered.length > 0) {
      return false;
    }
    return true;
  }

  // checkPermissions() {
  //   this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(
  //     result => {
  //       if (!result.hasPermission) {
  //         this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_CONTACTS);
  //       }
  //     },
  //     error => {
  //       console.error('Permission error:', error);
  //     }
  //   );
  // }
}
