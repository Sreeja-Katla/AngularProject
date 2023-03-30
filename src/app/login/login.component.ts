import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import credentials from '../../assets/data/credentials.json'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "reactiveForm";
  public userList: { id: number, name: string, email: string, password: string }[] = credentials;

  public reactiveForm: FormGroup;
  public userName: string;
  public userPassword: string;

  constructor(public routing: Router, public authService: AuthService) { }

  ngOnInit(): void {


    this.reactiveForm = new FormGroup({

      userName: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, Validators.required),
    });
  }
  public loginSuccess: boolean = true
  onSubmit(): void {

    this.userName = this.reactiveForm.value.userName;
    this.userPassword = this.reactiveForm.value.userPassword;

    this.userList.filter(elem =>{

     if(elem.name === this.userName &&  elem.password === this.userPassword){
      localStorage.setItem("userDetails",JSON.stringify(elem))

        this.routing.navigate(['/companyList']);
          this.authService.loggedIn(this.loginSuccess);
      }
    })

  }

  onReset(): void {
    this.reactiveForm.reset();
  }

}
