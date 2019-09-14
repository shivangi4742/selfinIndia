import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelfinComponent } from './selfin/selfin.component';
import { CreateemployeedetailsComponent } from './createemployeedetails/createemployeedetails.component';
import { EditemployeedetailsComponent } from './editemployeedetails/editemployeedetails.component';

const routes: Routes = [
  {
    path: 'getemployee',
    component: SelfinComponent
  },
  {
    path: 'createemployee',
    component: CreateemployeedetailsComponent
  },
  {
    path: 'editemployee/:id',
    component: EditemployeedetailsComponent
  },
  {
    path: '**',
    redirectTo: '/getemployee',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
