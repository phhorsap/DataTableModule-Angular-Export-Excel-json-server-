import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private http = inject(HttpClient);
  url = 'https://localhost:3000';
  ngonInit(): void {}

  getSales() {
    return this.http.get<any[]>(`${this.url}/saleList`);
  }
  
}
