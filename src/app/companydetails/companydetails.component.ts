import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit{

  public companyDetails:any
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}



  ngOnInit(): void {

    console.log(this.companyDetails);

  }
  public onClose():void{

   }


}




