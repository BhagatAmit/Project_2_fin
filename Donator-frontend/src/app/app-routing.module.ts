import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonatorHomeComponent } from './donator-home/donator-home.component';
import { DonatorLoginComponent } from './donator-login/donator-login.component';
import { DonatorMainComponent } from './donator-main/donator-main.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
 
  {path:'app',component:AppComponent},

  {path:'register',component:RegistrationComponent},
  {path:'logout', redirectTo: '/login', pathMatch: 'full'},

  {path:'login',component:DonatorLoginComponent},
  {path:'donator-home',component:DonatorHomeComponent,
  children:[
    {path:'add',component:CreateDonationComponent},
    {path:'donations',component:DonationListComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
