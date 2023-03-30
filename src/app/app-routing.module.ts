import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { LoginComponent } from './login/login.component';
import { MapComponentComponent } from './map-component/map-component.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'companyList', component: CompanyListComponent, canActivate: [AuthService] },
  { path: 'map', component: MapComponentComponent },
  { path: '**', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
