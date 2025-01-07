import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance/balance';
import { Transaction } from 'src/app/models/transaction/transaction';
import { BalanceService } from 'src/app/services/balance/balance.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {
  transactions: Transaction[] = []; // Replace with your Transaction interface if needed
  balances: Balance[] = []; // Replace with your Balance interface if needed
  accounts: any[] = [];
  bannerConfig: SwiperOptions;
  featureConfig: SwiperOptions;
  features: any[] = [];

  constructor(private dbService: TransactionService, private balanceService: BalanceService) { }

  ngOnInit() {
    this.balances = [
      { id: 1, date: new Date(), time: '12:00:00', total: 200000, saved: 10000, loaned: 0, borrowed: 0, spent: 0, received: 0 },
    ];
    this.accounts = [
      { id: 1, acc_no: ' ', balance: '200000' },
    ];
    this.features = [
      { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Loan', path: 'loan' },
      { id: 2, color: 'white', icon: 'send', name: 'Borrow', path: 'borrow' },
      { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up', path: 'top-up' },
      { id: 4, color: 'light', icon: 'newspaper', name: 'Save', path: 'save' },
      { id: 5, color: 'warning', icon: 'card', name: 'Spend', path: 'spend' },
    ];

    this.loadTransactions();

    // this.loadBalances();

    this.localLoadBalances();
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true }
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }

  // Fetch transactions from the DbService
  async loadTransactions() {
    try {
      this.transactions = await this.dbService.getAllTransactions();
    } catch (error) {
      console.error('Error loading transactions:', error);
    }
  }

  async loadBalances() {
    try {
      this.balances = await this.balanceService.getAllBalances();
    } catch (error) {
      console.error('Error loading balances:', error);
    }
  }

  localLoadBalances() {
    let test = localStorage.getItem('balances');
    this.balances = [
      { id: 1, date: new Date(), time: new Date().toTimeString().split(" ")[0], total: 0, saved: 0, loaned: 0, borrowed: 0, spent: 0, received: 0 },
    ];
    if (test) {
      this.balances = JSON.parse(test);
      console.log(this.balances);
    }
  }

  // View details of a transaction
  async viewTransaction(transactionId: number) {
    console.log('View transaction:', transactionId);
    // Navigate to a transaction detail page 
  }
}
