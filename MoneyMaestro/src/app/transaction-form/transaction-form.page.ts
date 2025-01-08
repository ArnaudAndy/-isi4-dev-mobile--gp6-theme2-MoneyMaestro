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

  constructor(
    private balanceService: BalanceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dbService: TransactionService
  ) {}

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

    this.localLoadBalances();

    console.log('balances:', this.balances);
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
        this.addBalance(transaction);

        console.log('Balance added:', this.balances);

        await this.dbService.addTransaction(transaction);

        this.router.navigate(['/']); // Navigate to the desired page
      } catch (error) {
        console.error('Error adding transaction:', error);
      }
    } else {
      console.error('Form is invalid');
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
}
