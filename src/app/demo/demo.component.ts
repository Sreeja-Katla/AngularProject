import { Component,Input,OnChanges, OnInit, SimpleChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,DoCheck,OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{


  @Input() cdata="";
  @Input() Oninit="Sreeja";
  @Input() Mobile:any
 
  ngDoCheck(): void {
    console.log("Docheck method is calling....");
    
  }
  ngAfterViewChecked(): void {
    console.log("afterviewchecked...");
    
  }
ngAfterViewInit(): void {
  console.log("Ater view init is calling");
  
}
ngAfterContentInit(): void {
  console.log("ContentInIt is called.....");
  
}
ngAfterContentChecked(): void {
  console.log("ContentChecked is called....");
  
}


  ngOnChanges(changes: SimpleChanges): void {
    console.log(" onchanges method is callingg....");
    console.log(changes);  
  }
  ngOnInit(): void {
    console.log("ONINIT cALLED" +this.Oninit);
  }

  constructor(){
    // console.log("Constructor called " +this.Oninit);
    
   }
  

  
}


// Servicesss.........


// wish ='';
  // Gender=''
  // sayHello(inputValue:HTMLInputElement)
  // {
  //   // return ("Hello " +inputValue );
  //   // alert("Hello  "+inputValue.value)
  //   this.wish= inputValue.value;
  // //  console.log(inputValue);
  // }
  // genderCheck(input:HTMLInputElement){

  //     this.Gender= input.value;
  // }
   














  // data:string="this is view child";

  // passToParent(){
  //   return this.data;
  // }


  //data:string="This is demo component class"

  // sayHello(){
    
  //   return this.data;
  //   //console.log("This is demo component class");
  // }