import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  
  getByCategory(category: string): Observable<any[]> {
    return this.http
      .get<any>(`https://dummyjson.com/products/category/${encodeURIComponent(category)}` )
      .pipe(map(res => res.products));
  }
}
