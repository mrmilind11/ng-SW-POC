import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  /************************************* Constructor ********************************/
  constructor() { }
  /************************************* Properties *********************************/
  public productsList = [];
  /************************************* Methods ************************************/
  ngOnInit(): void {
    console.log('products container loaded');
    this.getProductsList();
  }
  private getProductsList(): void {
    this.productsList = [
      { name: 'RC car', imageUrl: '', amount: 1250, available: 10 },
      { name: 'Wheat flour (10 kg)', imageUrl: '', amount: 250, available: 50 },
      { name: 'Rice (5 kg)', imageUrl: '', amount: 150, available: 25 },
      { name: 'Bluetooth speaker', imageUrl: '', amount: 1500, available: 10 },
      { name: 'Water bottle', imageUrl: '', amount: 200, available: 15 },
      { name: 'Dish washer', imageUrl: '', amount: 150, available: 20 },

    ]
  }
}
