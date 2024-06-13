import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  newCompany = {
    cId:0,
    cName:'',
    cSector:'',
    cSharePrice:'',
    marketCap:'',
    dividendyield:0,
    pEratio:''
  }

  constructor(private service:ApiService, private router:Router){}

  createCompany()
  {
  
    this.service.addCompany(this.newCompany).subscribe((data)=>{
      this.router.navigate(['/company']);
    });
    
  }
}
