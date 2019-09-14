import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class UtilsService {
    private _baseUrl = "http://localhost:9090/";
    private _getemployeedetailsURL = "employee/getemolpyeedetails";
    private _addemployeeURL = "employee/add";
    private _deleteemployeeURL = "employee/delete";
    private _editemployeeURL = "employee/edit/";
    private _updateemployeeURL = "employee/update/";
    constructor() { }

    getempyeedetailsURL() {
        return this._baseUrl + this._getemployeedetailsURL;
    }

    getaddURL() {
        return this._baseUrl + this._addemployeeURL;
    }

    getdeleteURL() {
        return this._baseUrl + this._deleteemployeeURL;
    }

    getupdateURL() {
        return this._baseUrl + this._updateemployeeURL;
    }
    editemployeeURL(){
        return this._baseUrl + this._editemployeeURL;
    }
    

}