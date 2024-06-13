import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {

  constructor(private service:ApiService, private router:Router){}

  info:any;
  ngOnInit() 
  {
    this.service.getData().subscribe((data)=>{
      
      this.info = data;
    });  
  }

  editCompany(ind:any)
  {
    var info = this.info[ind];
    this.service.setinfo(info);
    this.router.navigate(['/editcompany']);
  }

  deleteCompany(ind:any)
  {
    var info = this.info[ind];
    this.service.deleteCompany(info.cId).subscribe((data) =>{
    this.currentpagereload()
    });
  }

  currentpagereload()
  {
    window.location.reload();
  }
}
