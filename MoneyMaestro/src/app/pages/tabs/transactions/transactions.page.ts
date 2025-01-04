import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction/transaction';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  allTransactions: Transaction[] = [];
  transactions: Transaction[] = [];

  segmentValue = 'in';

  constructor(private dbService: TransactionService, private balanceService: BalanceService) { }

  ngOnInit() {
    
    this.filterTransactions();

    this.loadTransactions();
  }

  filterTransactions() {
    if(this.segmentValue === 'in') {
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

  // Fetch transactions from the DbService
  async loadTransactions() {
    try {
      this.allTransactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }

}
