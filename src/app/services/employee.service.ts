import { Injectable } from '@angular/core';
import { UtilsService } from './utilservice.service'


import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class EmployeeService {
  constructor(private http: Http, private utilsService: UtilsService) { }

  getemployeedetails(): Promise<any> {
    return this.http
      .get(this.utilsService.getempyeedetailsURL())
      .toPromise()
      .then(res => this.getemployeedetailspost(res.json()))
      .catch(res => this.handleError(res.json()));
  }

  createemployeedetail(lastName: string, firstName: string, Address: string, city: string): Promise<any> {
    return this.http
      .post(this.utilsService.getaddURL(), {
        "LastName": lastName,
        "FirstName": firstName,
        "Address": Address,
        "City": city
      })
      .toPromise()
      .then(res => this.createemployeedetailPost(res.json()))
      .catch(res => this.handleError(res.json()));
  }
  createemployeedetailPost(res) {
    return res;
  }


  getemployeedetailspost(res) {
    return res;
  }

  editemployeedetails(id: string): Promise<any> {
    return this.http
      .get(this.utilsService.editemployeeURL() + id)
      .toPromise()
      .then(res => this.edit(res.json()))
      .catch(res => this.handleError(res.json()));
  }
  edit(res) {
    if (res)
      return res;
  }

  updateemployeedetails(id: string, lastName: string, firstName: string, Address: string, city: string): Promise<any> {
    return this.http
      .post(this.utilsService.getupdateURL() + id, {
        "PersonID": id,
        "LastName": lastName,
        "FirstName": firstName,
        "Address": Address,
        "City": city
      })
      .toPromise()
      .then(res => this.updatepost(res.json()))
      .catch(res => this.handleError(res.json()));
  }
  
  updatepost(res) {
    return res;
  }

  deletemployeedetails(id: string): Promise<any> {
    return this.http
      .post(this.utilsService.getdeleteURL(), {
        "id": id
      })
      .toPromise()
      .then(res => this.deletemployeedetailspost(res.json()))
      .catch(res => this.handleError(res.json()));
  }
  deletemployeedetailspost(res) {
    return res;
  }

  handleError(res: any) {
    return { success: false };
  }

}