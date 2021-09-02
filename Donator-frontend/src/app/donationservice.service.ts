import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  Observable } from 'rxjs';
import { ApiResponse } from './model/api.response';
import { Donation } from './model/donation.model';
import { User } from './model/User';

  providedIn: 'root'
@Injectable()
export class DonationService {

  constructor(private http: HttpClient) { }
 
  getAllDonation():Observable<Donation[]>{
    return this.http.get<Donation[]>("http://localhost:9898/donations");
 }
/*
  getDonationById(dId: number): Observable<any> {
    return this.http.get(this.baseUrl + dId);
  } */

  createDonation(donation: Donation): Observable<Donation> {
    console.log("welcome"+" "+donation.dName+donation.dDate);
    return this.http.post<Donation>("http://localhost:9898/donation",donation);
  }

  updateDonation(d:Donation):Observable<Donation>{
    return this.http.put<Donation>("http://localhost:9898//donation/update",d);     
  }
  deleteDonation(d:Donation):Observable<string>{
    return this.http.delete<string>("http://localhost:9898/donation/delete/"+d.dId);

  }
  
  createUser(user: User): Observable<User> {
   
    return this.http.post<User>("http://localhost:9898/user",user);
  }
  validateDonator(user:User):Observable<any>{
/*     console.log(cred.email+" "+cred.password)
 */    return  this.http.post("http://localhost:9898/login/",user);
    
  }
 
}
