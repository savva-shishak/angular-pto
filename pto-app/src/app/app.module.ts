import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrefsPanelComponent } from './pages/hrefs-panel/hrefs-panel.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { HrefsComponent } from './components/hrefs/hrefs.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HrefsPanelComponent,
    EmployeesComponent,
    EquipmentsComponent,
    ContractsComponent,
    MaterialsComponent,
    RegistryComponent,
    HrefsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
