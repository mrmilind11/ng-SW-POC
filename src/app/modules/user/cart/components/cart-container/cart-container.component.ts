import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
  /************************************* Constructor ********************************/
  constructor() { }
  /************************************* Properties *********************************/
  public displayedColumns = ['name', 'quantity', 'amount', 'action'];
  public cartData = [];
  /************************************* Methods ************************************/
  ngOnInit(): void {
    this.getCartData();
  }

  private getCartData() {
    this.cartData = [
      { name: 'Flour 10kg', quantity: 1, amount: 350, action: 'Buy now' },
      { name: 'Sugar 5kg', quantity: 2, amount: 200, action: 'Buy now' },
      { name: 'Dish soap', quantity: 4, amount: 500, action: 'Buy now' },
      { name: 'Cadbury chocolate', quantity: 10, amount: 100, action: 'Buy now' },
    ]
  }

}
