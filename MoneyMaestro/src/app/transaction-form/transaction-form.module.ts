import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionFormPageRoutingModule } from './transaction-form-routing.module';

import { TransactionFormPage } from './transaction-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TransactionFormPage]
})
export class TransactionFormPageModule {}
