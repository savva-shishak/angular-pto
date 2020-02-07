import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractsComponent } from './components/contracts/contracts.component';
import { AppMaterialModule } from './modules/app-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { ContractComponent } from './components/panels/contract/contract.component';
import { EntryComponent } from './components/panels/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ContractsComponent,
    LayoutComponent,
    ListComponent,
    ContractComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
