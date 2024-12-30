import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.page.html',
  styleUrls: ['./transaction-form.page.scss'],
})
export class TransactionFormPage implements OnInit {
  transactionForm!: FormGroup;
  transactionType: string = ''; // Will hold the type of transaction (Loan, Borrow, etc.)

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private dbService: TransactionService) {}

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
      contact: ['', [Validators.required]],
      isReturned: [false],
    });
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

      // Call the DbService to add the transaction
      await this.dbService.addTransaction(formValue);

      this.router.navigate(['/tabs/home/transaction-list']); // Navigate to the desired page (e.g., home or dashboard)
      } else {
      console.error('Form is invalid');
    }
  }

  async cancel() {
    this.router.navigate(['/']); // Navigate to the desired page (e.g., home or dashboard)
  }
}
