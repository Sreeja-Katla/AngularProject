import { Component,OnInit} from '@angular/core';
import{Customer} from './customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  selectedCustomer: any;
  customers:Customer[]=[
    {customerNo:1, name:'srija', adress:'',city:'hyderabad', country:'India'},
    {customerNo:2, name:'teja', adress:'',city:'warangal', country:'India'},
    {customerNo:3, name:'bunny', adress:'',city:'hanamkonda', country:'India'},
    {customerNo:4, name:'ravi', adress:'',city:'andrapradesh', country:'India'},
    {customerNo:5, name:'mahesh', adress:'',city:'karimnagar', country:'India'}

  ]}
