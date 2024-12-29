import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/bd/db.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit {
  transactionForm!: FormGroup;
  transactionType: string = ''; // Will hold the type of transaction (Loan, Borrow, etc.)

  constructor(private fb: FormBuilder, private route: ActivatedRoute,     private router: Router, private dbService: DbService) {
    this.route.data.subscribe((data) => {
      this.setTransactionType(data['type']);
    });
    this.transactionForm = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      time: [new Date().toLocaleTimeString('en-GB', { hour12: false }), Validators.required],
      contact: ['', [Validators.required]],
      isReturned: [false],
    });
  }

  ngOnInit() {
    
  }

  // Load form fields dynamically based on the type
  setTransactionType(type: string) {
    this.transactionType = type;
    this.transactionForm.patchValue({ type });
  }

  submitForm() {
    if (this.transactionForm.valid) {
      console.log('Form Submitted:', this.transactionForm.value);
      const formValue = this.transactionForm.value;

      // Call the DbService to add the transaction
      this.dbService
        .addTransaction({
          ...formValue,
          date: new Date(formValue.date),
        })
        .then(() => {
          console.log('Transaction added successfully!');
          this.router.navigate(['transactions']); // Navigate to transactions list or desired page
        })
        .catch((error) => {
          console.error('Error adding transaction:', error);
        });
      } else {
      console.error('Form is invalid');
    }
  }

  cancel() {
    this.router.navigate(['']); // Navigate to the desired page (e.g., home or dashboard)
  }
}
