import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnalyticsPageRoutingModule } from './analytics-routing.module';

import { AnalyticsPage } from './analytics.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnalyticsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AnalyticsPage]
})
export class AnalyticsPageModule {}
