import { Component, OnInit } from '@angular/core';
import { CartAPIService } from '../cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    title = 'shopping';

    items :Item[]= [
      {
          product: "Alpha",
          price: 1,
          quantity: 1,
          id: 1,
      },
      {
          product: "Beta",
          price: 2,
          quantity: 2,
          id: 2,
      },
      {
          product: "Gamma",
          price: 3,
          quantity: 3,
          id: 3,
      },
      {
          product: "Delta",
          price: 4,
          quantity: 4,
          id: 4,
      },
      {
          product: "Epsilon",
          price: 5,
          quantity: 5,
          id: 5,
      }
    ]



  constructor(private apiService: CartAPIService) { }

  ngOnInit(): void {
    this.apiService.getAllItems().subscribe((response: Item) => {})
  }

}

export interface Item {
    product: string;
    price: number;
    quantity: number;
    id: number;
}
