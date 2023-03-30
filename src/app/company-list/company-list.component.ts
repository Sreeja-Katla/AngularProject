import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import company from '../../assets/data/company.json';
import { AuthService } from '../auth.service';
import { CompanydetailsComponent } from '../companydetails/companydetails.component';
import { CreateCompanyComponent } from '../create-company/create-company.component';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component
import { Router } from '@angular/router';
import  Swal from 'sweetalert2';
// import { DatePipe } from '@angular/common';
// import * as mapboxgl from 'mapbox-gl';
// import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';




@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],

})
export class CompanyListComponent implements OnInit {
  public companyList: {
    id: number;
    Name: string;
    Revenue: string;
    Establish_Year: number;
    Employee_no: number;
    Industry: string;
    image: string;
    CEO: string;
    headquarter: string;
    Expenditure: string;
    Profit: string;
    EmployeeDetails: [];
  }[] = company;

  companyDetails: {
    id: number;
    Name: string;
    Revenue: string;
    Establish_Year: number;
    Employee_no: number;
    Industry: string;
    image: string;
    CEO: string;
    headquarter: string;
    Expenditure: string;
    Profit: string;
    EmployeeDetails: [];
  };
  EmployeeDetails: { Name: string; Experience: string; Technology: string }[];
  bsModalRef: any;
  public subscription: Subscription;


  constructor(
    private modal_popup: NgbModal,
    private modalService: BsModalService,
    public routing :Router,
    private authService: AuthService,
    private bnIdle: BnNgIdleService,

  ) {}


  ngOnInit(): void {


    this.bnIdle.startWatching(1000).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {

        Swal.fire({
          title: 'Session Time Out',
          text: 'Your session has timed out due to inactivity. Please log in again to continue.',
          icon: 'warning',

          confirmButtonText: 'Yes',
        }).then((result) => {
          if (result.isConfirmed) {

            localStorage.removeItem('userDetails');
            this.routing.navigate(['/login']);
            this.bnIdle.stopTimer();

          }
        });

      }
    });

    this.subscription = this.authService.updateTable$.subscribe((res) => {
      console.log(res);
      // console.log(this.authService.companyDetails);
      this.companyList.push(res);
    });

    // this.latLng();





// this.latLng();


}


   public showCompanyDetails(details: any) :void{
    // this.modal_popup.open(popup)
    // this.companyDetails = this.companyList[index];
    // this.companyDetails = details;

    this.bsModalRef = this.modalService.show(CompanydetailsComponent, {
      initialState: {
        companyDetails: details,
      },
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
 public  showEmployeeDetails(index: number, popup: TemplateRef<string>) :void{
    this.modal_popup.open(popup);
    this.companyDetails = this.companyList[index];
    this.EmployeeDetails = this.companyList[index].EmployeeDetails;
  }
  public onClose() :void {
    this.modal_popup.dismissAll();
  }
 public  openModalWithComponent():void {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
      },
    };
  }
 public addCompany():void {
    console.log('Add compny');

    this.bsModalRef = this.modalService.show(CreateCompanyComponent, {});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
