import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product_url = environment.server_url + '/product_upload';

  constructor(private apiService: ApiService, private http: HttpClient) { }

  allProduct(): Observable<any> {
    return this.http.get("http://localhost:8020/viewAll");
  }
  addNewProduct(product_dto: Product): Observable<Product> {
    console.log("hello")
    console.log(product_dto);
    return this.http.post<Product>( "http://localhost:8020/productupload", product_dto);
  }


 

  singleProduct(id) {
    return this.apiService.get("http://localhost:8020/product/"+id, id)
  }
  updateProduct(id, product_dto): Observable<any> {
    return this.apiService.put(this.product_url + id, product_dto);
  }
  deleteProduct(id): Observable<any> {
    return this.apiService.delete(this.product_url + id);
  }
}
