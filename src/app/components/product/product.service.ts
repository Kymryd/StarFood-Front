import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  private productUrl = 'http://localhost:8080/starfood/products';

  public getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }

  public getProductsByCategory(id) {
    return this.http.get<Product[]>(this.productUrl + '/ByCategory/' + id);
  }
}
