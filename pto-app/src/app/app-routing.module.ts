import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrefsPanelComponent } from './pages/hrefs-panel/hrefs-panel.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { MaterialsComponent } from './pages/materials/materials.component';


const routes: Routes = [
  {
    path: '',
    component: HrefsPanelComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'contracts',
    component: ContractsComponent
  },
  {
    path: 'equipments',
    component: EquipmentsComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
