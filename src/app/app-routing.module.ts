import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const routes: Routes = [
  {
    path : 'home',component:HomecomponentComponent
  },
  {
    path : 'company',component:CompanyListComponent
  },
  {
    path : 'addcompany',component:AddCompanyComponent
  },
  {
    path : 'editcompany', component:EditCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
