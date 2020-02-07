import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractsComponent } from '../components/contracts/contracts.component';
import { ContractComponent } from '../components/panels/contract/contract.component';
import { EntryComponent } from '../components/panels/entry/entry.component';


const routes: Routes = [
  {
    path: '',
    component: ContractsComponent,
    children: [
      {
        path: '',
        component: EntryComponent
      }
    ]
  },
  {
    path: 'contracts',
    component: ContractsComponent,
    children: [
      {
        path: '',
        component: ContractComponent
      },
      {
        path: ':id',
        component: ContractComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
