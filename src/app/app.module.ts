import { MaterialModule } from './shared/material/material.module';
import { CommonsModule } from './commons/commons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierDetailComponent } from './supplier/supplier-detail/supplier-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    SupplierListComponent,
    SupplierDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
