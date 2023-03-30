import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css'],
})
export class CreateCompanyComponent implements OnInit {
  public reactiveForm: FormGroup;
  public companyName: string;
  public revenue: number;
  public establishYear: number;
  public employee: number;
  public industry: number;
  public dynamicId=1;

  constructor(private authService:AuthService){}

  ngOnInit(): void {

    this.createForm();

    // this.companyName = this.reactiveForm.value.companyName;
    // this.revenue = this.reactiveForm.value.revenue;
    // this.establishYear = this.reactiveForm.value.establishYear;
    // this.employee = this.reactiveForm.value.employee;
    // this.industry = this.reactiveForm.value.industry;
  }
  createForm(){
    this.reactiveForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Revenue: new FormControl(null, Validators.required),
      Establish_Year: new FormControl(null, Validators.required),
      Employee_no: new FormControl(null, Validators.required),
      Industry: new FormControl(null, Validators.required),
      id: new FormControl(this.dynamicId)
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);

    //  this.companyDetails =JSON.stringify(this.reactiveForm.value);
    // console.log(this.companyDetails);


    this.authService.companyDetails.push(this.reactiveForm.value);
    this.authService.updateTable.next(this.reactiveForm.value);
    this.dynamicId++;
    this.createForm();
    console.log(this.dynamicId);

    console.log(this.authService.companyDetails);
  }

}
