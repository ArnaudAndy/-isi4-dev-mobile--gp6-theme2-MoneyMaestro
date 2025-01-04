import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contacts } from '@awesome-cordova-plugins/contacts/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { TransactionService } from './services/transaction/transaction.service';
import { BalanceService } from './services/balance/balance.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [SQLite, TransactionService, BalanceService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Contacts],
  bootstrap: [AppComponent],
})
export class AppModule {}
