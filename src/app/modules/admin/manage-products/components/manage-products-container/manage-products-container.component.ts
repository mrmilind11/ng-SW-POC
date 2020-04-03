import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-products-container',
  templateUrl: './manage-products-container.component.html',
  styleUrls: ['./manage-products-container.component.scss']
})
export class ManageProductsContainerComponent implements OnInit {
  /********************************* Constructor ******************************/
  constructor() { }
  /********************************* Properties *******************************/
  public displayedColumns: string[] = ['name', 'available', 'amount'];
  public productsList = [];
  /********************************* Methods **********************************/
  ngOnInit(): void {
    this.getProductsList();
  }
  private getProductsList() {
    this.productsList = [
      { name: 'Bluetooth speakers', available: 5, amount: 1500 },
      { name: 'Washing powder', available: 100, amount: 250 },
      { name: 'Sanitizer', available: 50, amount: 350 },
      { name: 'Masks', available: 50, amount: 400 },
      { name: 'Brush', available: 100, amount: 20 },
      { name: 'Toothpaste', available: 150, amount: 40 },
      { name: 'Chips', available: 200, amount: 10 },
    ]
  }
}
