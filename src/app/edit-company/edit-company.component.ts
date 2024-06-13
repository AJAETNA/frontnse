import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent {
  constructor(private service:ApiService, private router:Router){ }

  info :any;
  ngOnInit(){
    this.info = this.service.getinfo();
  }

 

  editCompany()
  {
    this.service.editCompany(this.info).subscribe((data)=>{
      this.router.navigate(['/company']);
    });
  }

  

}
