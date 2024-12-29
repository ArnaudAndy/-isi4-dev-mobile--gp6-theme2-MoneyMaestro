import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TransactionFormComponent } from '../../transaction-form/transaction-form.component';
import { TransactionListComponent } from 'src/app/transaction-list/transaction-list.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'loan', component: TransactionFormComponent, data: { type: 'Loan' } },
  { path: 'borrow', component: TransactionFormComponent, data: { type: 'Borrow' } },
  { path: 'top-up', component: TransactionFormComponent, data: { type: 'Top-up' } },
  { path: 'save', component: TransactionFormComponent, data: { type: 'Save' } },
  { path: 'spend', component: TransactionFormComponent, data: { type: 'Spend' } },
  { path: 'transactions', component: TransactionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
