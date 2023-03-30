import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private routing: Router, private authService: AuthService) { }
  logout: boolean = false;
  onLogout(): void {

    this.routing.navigate(['/login'])
    this.authService.loggedOut(this.logout)
  }
}
