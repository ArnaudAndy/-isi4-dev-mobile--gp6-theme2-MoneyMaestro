import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'loan',
    loadChildren: () => import('../../../transaction-form/transaction-form.module').then( m => m.TransactionFormPageModule),
    data: { type: 'Loan' }
  },
  {
    path: 'borrow',
    loadChildren: () => import('../../../transaction-form/transaction-form.module').then( m => m.TransactionFormPageModule),
    data: { type: 'Borrow' }
  },
  {
    path: 'top-up',
    loadChildren: () => import('../../../transaction-form/transaction-form.module').then( m => m.TransactionFormPageModule),
    data: { type: 'Top-up' }
  },
  {
    path: 'save',
    loadChildren: () => import('../../../transaction-form/transaction-form.module').then( m => m.TransactionFormPageModule),
    data: { type: 'Save' }
  },
  {
    path: 'spend',
    loadChildren: () => import('../../../transaction-form/transaction-form.module').then( m => m.TransactionFormPageModule),
    data: { type: 'Spend' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
