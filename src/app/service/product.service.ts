import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);

  getAll(): Promise<any> {
    return firstValueFrom(
      this.httpClient.get<any>('https://peticiones.online/api/products')
    )
  }
}
