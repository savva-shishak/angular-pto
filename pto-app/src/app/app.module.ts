import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrefsPanelComponent } from './components/hrefs-panel/hrefs-panel.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { MaterialsComponent } from './components/materials/materials.component';

@NgModule({
  declarations: [
    AppComponent,
    HrefsPanelComponent,
    EmployeesComponent,
    EquipmentsComponent,
    ContractsComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
