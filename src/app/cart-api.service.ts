import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WriteKeyExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class CartAPIService {

  constructor(private http: HttpClient) { }
  baseURL: string = 'https://localhost:4200/'
  

    getAllItems() {
        Response.()

        return this.http.get("http://localhost:4200/cart-items",
        { responseType: "json"});
    }

    deleteItem(num)
    {
        let url: string = `${this.baseURL}`
        
    }

    addItem(item)
    {
        let url: string = `${this.baseURL}`

    }
}
