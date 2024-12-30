import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction/transaction';
import { TransactionService } from '../services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.scss'],
})
export class TransactionListPage implements OnInit {
  transactions: Transaction[] = []; // Replace with your Transaction interface if needed
  isLoading: boolean = true;

  constructor(private dbService: TransactionService) {
    this.loadTransactions();
  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  // Fetch transactions from the DbService
  async loadTransactions() {
    try {
      this.transactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
    
  }

  // View details of a transaction
  async viewTransaction(transactionId: number) {
    console.log('View transaction:', transactionId);
    // Navigate to a transaction detail page if necessary
  }
}
