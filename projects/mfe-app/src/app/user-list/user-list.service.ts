// src/app/user/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  getAllPartners(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPartnerById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPartner(partner: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, partner);
  }

  updatePartner(id: string, partner: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, partner);
  }

  deletePartner(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
