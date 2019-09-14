import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-selfin',
  templateUrl: './selfin.component.html',
  styleUrls: ['./selfin.component.scss']
})
export class SelfinComponent implements OnInit {
  employee : string[];
  filteredEmployee:string;
  employeesearch:string;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeService.getemployeedetails()
        .then(res=> this.init(res));
  }
  init(res:any) {
    this.employee = res;
    this.searchEmployee();
  }
  searchEmployee() {
    this.filteredEmployee = this.getFilteredPayments();
  }

  getFilteredPayments(): any {
    if(!this.employee || this.employee.length <= 0)
      return this.employee;
    
    let flPmnts: any = this.employee;
    let srch: any = this.employeesearch ? this.employeesearch.trim() : null;
    let me: any = this;
    
    if(srch) {    
      flPmnts = flPmnts.filter(function(p: any) { 
          return  p.FirstName && p.FirstName.toLowerCase().indexOf(srch.toLowerCase()) >= 0
           || p.LastName && p.LastName.toLowerCase().indexOf(srch.toLowerCase()) >= 0
           || p.City && p.City.toLowerCase().indexOf(srch.toLowerCase()) >= 0
           || p.Address && p.Address.toLowerCase().indexOf(srch.toLowerCase()) >= 0

      });
    }

    return flPmnts;
  }
  edit(id:any){
    this.router.navigateByUrl('editemployee/'+ id)
  
  }
  delete(id:any){
     this.employeeService.deletemployeedetails(id)
         .then(res=> this.deletepost(res));
  }
  deletepost(res){
      if(res== true){
        this.employeeService.getemployeedetails()
        .then(res=> this.init(res));
      }
  }
  createemp(){
    this.router.navigateByUrl('/createemployee');
  }
}
