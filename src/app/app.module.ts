import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfinComponent } from './selfin/selfin.component';
import {  UtilsService} from './services/utilservice.service';
import { EmployeeService } from './services/employee.service';
import { EmployeeModel} from './models/employee';
import { CreateemployeedetailsComponent } from './createemployeedetails/createemployeedetails.component';
import { EditemployeedetailsComponent } from './editemployeedetails/editemployeedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfinComponent,
    CreateemployeedetailsComponent,
    EditemployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [UtilsService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
