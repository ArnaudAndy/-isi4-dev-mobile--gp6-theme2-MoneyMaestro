import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/bd/db.service';
import { Transaction } from '../models/transaction/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = []; // Replace with your Transaction interface if needed
  isLoading: boolean = true;

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  // Fetch transactions from the DbService
  loadTransactions() {
    this.dbService
      .getAllTransactions()
      .then((transactions) => {
        this.transactions = transactions;
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
        this.isLoading = false;
      });
  }

  // View details of a transaction
  viewTransaction(transactionId: number) {
    console.log('View transaction:', transactionId);
    // Navigate to a transaction detail page if necessary
  }
}
