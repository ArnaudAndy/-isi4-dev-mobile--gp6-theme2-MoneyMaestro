import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction';
import { Balance } from '../models/balance/balance';
import { BalanceService } from '../services/balance/balance.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.page.html',
  styleUrls: ['./transaction-form.page.scss'],
})
export class TransactionFormPage implements OnInit {
  transactionForm!: FormGroup;
  transactionType: string = ''; // Will hold the type of transaction (Loan, Borrow, etc.)
  balances: Balance[] = [];

  constructor(private balanceService: BalanceService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbService: TransactionService) {}

  ngOnInit() {
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
      contact: ['', [Validators.maxLength(100)]],
      isReturned: [false],
    });

    // this.loadBalances();

    this.localLoadBalances();
  }

  // Load form fields dynamically based on the type
  async setTransactionType(type: string) {
    this.transactionType = type;
    this.transactionForm.patchValue({ type });
  }

  async submitForm() {
    if (this.transactionForm.valid) {
      console.log('Form Submitted:', this.transactionForm.value);
      const formValue = this.transactionForm.value;

      let t : Transaction = {
        id: formValue.id,
        description: formValue.description,
        type: formValue.type,
        amount: formValue.amount,
        date: new Date(formValue.date),
        time: formValue.time,
        contact: formValue.contact,
        isReturned: formValue.isReturned,
      };
      try {
        // Call the DbService to add the transaction
        // await this.dbService.addTransaction(t);

        // Update the balances
        // await this.balanceService.addBalanceWithTransaction(t)

        this.addBalance(t)

        this.router.navigate(['/']); // Navigate to the desired page (e.g., home or dashboard)
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
      
    } else {
      console.error('Form is invalid');
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
      { id: 1, date: new Date(), time: new Date().toTimeString().split(' ')[0], total: 0, saved: 0, loaned: 0, borrowed: 0, spent: 0, received: 0 },
    ];
    if (test) {
      this.balances = JSON.parse(test);
    }
  }

  addBalance(t: Transaction){
    let n : number = this.balances.length;
    var balance: Balance = this.balances[n - 1];
    balance.date = t.date;
    balance.time = t.time;

    if (t.type === 'Loan') {
      balance.loaned += t.amount;
      balance.total -= t.amount;
    }

    if (t.type === 'Borrow') {
      balance.borrowed += t.amount;
      balance.total += t.amount;
    }

    if (t.type === 'Spend') {
      balance.spent += t.amount;
    }

    if (t.type === 'Receive') {
      balance.received += t.amount;
    }

    this.balances.push(balance);

    localStorage.setItem('balances', JSON.stringify(this.balances));
  }

  async cancel() {
    this.router.navigate(['/']); // Navigate to the desired page (e.g., home or dashboard)
  }
}
