import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../models/employee';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-createemployeedetails',
  templateUrl: './createemployeedetails.component.html',
  styleUrls: ['./createemployeedetails.component.scss']
})
export class CreateemployeedetailsComponent implements OnInit {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  submitted = false;
  employee : EmployeeModel;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    
  }
  newEmployee(): void {
    this.submitted = false;
    //this.employee = new Employee();
  }

  save() {
    this.employeeService.createemployeedetail(this.lastName,this.firstName, this.address, this.city )
     .then(res=> this.gotoList())
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/getemployee']);
  }
}
