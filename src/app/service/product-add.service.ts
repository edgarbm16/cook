import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';

export interface Producto {
  objectId?: string;
  nombre?: string;
  descripcion?: string;
  cantidad?: string;
  precio?: string;
  status?: string;
  updateAt?: string;
  createdAt?: string;
  ACL?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductAddService {


  private url = ENV.API + 'classes/products';
  private urlpost = ENV.API + 'products';
  private headerGet = {
    "X-Parse-Application-Id": ENV.APP_ID,
    "X-Parse-REST-API-Key": ENV.API_SECRET,
  }
  private header = {
    "X-Parse-Application-Id": ENV.APP_ID,
    "X-Parse-REST-API-Key": ENV.API_SECRET,
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  }


  constructor(
    private http: HttpClient
  ) { }


  getProducts(){
    return this.http.get<[Producto]>(this.url, {headers: this.headerGet});
  }

  productAdd(productAdd: Producto){
    return this.http.post(this.urlpost, productAdd, {headers: this.header});
  }
}
