import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.path + '/api/v1';
  http1:any

  constructor(@Inject(HttpClient) http:any) { 
    this.http1 = http
  }
  
}





