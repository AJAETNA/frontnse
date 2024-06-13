import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  info:any;

  setinfo(data:any){
    this.info = data;
  }
  getinfo(){
    return this.info;
  }
  getData()
  {
      return this.http.get("http://localhost:8080/company")
  }

  addCompany(company:any)
  {
    return this.http.post("http://localhost:8080/addcompany",company)
  }

  editCompany(company:any){
    return this.http.put("http://localhost:8080/updateCompany", company)
  }

  deleteCompany(id:any)
  {
    return this.http.delete("http://localhost:8080/deletecompany/" + id)
  }
}
