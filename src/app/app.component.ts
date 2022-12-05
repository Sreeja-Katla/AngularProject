import { Component, ElementRef,ViewChild,DoCheck,AfterViewInit } from '@angular/core';
import { DemoComponent } from './demo/demo.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements DoCheck,AfterViewInit{
  title = 'view Child';

  wish ="Hello Good Morning";
  HookOnIn ="This is Oninit method";
   Mobile="";

   mlist=[   
    "Oppo",
    "samsung",
    "Iphone",
    "MI"
]
 i=0;
 increment(){
  this.i++;
 }

ngDoCheck(): void {
  console.log("Parent ngDoCheck is caling....");
  
}
ngAfterViewInit(): void {
  console.log("Aftr view in it calling");
  
}
  constructor(){ }
 mobileAdd(){
  this.mlist.push(this.Mobile);
  this.Mobile=" "
 }
 
 
}

// SERVICES......

// calculateAge(){
//   let BirthDate = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
//   let currentDate =new Date().getFullYear();
//   console.log(new Date());
  

//   let age= currentDate- BirthDate;
//   this.Age.nativeElement.value=age;
//   console.log(this.Age.nativeElement.value);

// }










// View Child....

  // @ViewChild('dobInput') dateOfBirth!:ElementRef;
  // @ViewChild('ageInput') Age!:ElementRef;
  // @ViewChild(DemoComponent,{static:true}) DemoClass!:DemoComponent;








 // email='';

  // enterEmail(input:any){
  //   this.email=input.value;
  // }
  // @ViewChild(DemoComponent) demoVariable:any;
  
   
 
//    test(){
//  this.demoVariable.data;
//  this.demoVariable.passToParent();
 
//     console.log(this.demoVariable.passToParent())
//    }
