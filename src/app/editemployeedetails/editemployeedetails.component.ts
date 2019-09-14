import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EmployeeModel } from '../models/employee';

@Component({
  selector: 'app-editemployeedetails',
  templateUrl: './editemployeedetails.component.html',
  styleUrls: ['./editemployeedetails.component.scss']
})
export class EditemployeedetailsComponent implements OnInit {
  id: string;
  employee:EmployeeModel;
  constructor(private route: ActivatedRoute,private router: Router, private employeeService: EmployeeService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id, 'jhdjh');
    this.employeeService.editemployeedetails(this.id)
        .then(res=> this.init(res));

  }
  init(res){
   this.employee = res;
   console.log(this.employee);
  }

  onSubmit(){
    this.employeeService.updateemployeedetails(this.id, this.employee.LastName, this.employee.FirstName,
       this.employee.Address, this.employee.City)
     .then(res=> this.gotoList())
  }

  gotoList() {
    this.router.navigate(['/getemployee']);
  }

}
