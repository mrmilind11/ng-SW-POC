import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-container',
  templateUrl: './orders-container.component.html',
  styleUrls: ['./orders-container.component.scss']
})
export class OrdersContainerComponent implements OnInit {
  /********************************* Constructor ******************************/
  constructor() { }
  /********************************* Properties *******************************/
  public displayedColumns: string[] = ['name', 'quantity', 'date', 'amount'];
  public ordersList = [];
  /********************************* Methods **********************************/
  ngOnInit(): void {
    console.log('Orders container loaded');
    this.getOrdersList();
  }
  private getOrdersList() {
    this.ordersList = [
      { name: 'Bluetooth speakers', quantity: 2, date: new Date(2019, 3, 5), amount: 1500 },
      { name: 'Washing powder', quantity: 1, date: new Date(2020, 0, 15), amount: 250 },
      { name: 'Sanitizer', quantity: 5, date: new Date(2020, 1, 25), amount: 350 },
      { name: 'Masks', quantity: 2, date: new Date(2020, 2, 5), amount: 400 },
      { name: 'Light', quantity: 2, date: new Date(2020, 2, 5), amount: 400 },
      { name: 'Lighthouse', quantity: 3, date: new Date(2020, 2, 5), amount: 400 },
      { name: 'Lighthouse 2', quantity: 3, date: new Date(2020, 2, 5), amount: 400 },
      { name: 'Lighthouse 3', quantity: 3, date: new Date(2020, 2, 5), amount: 400 },
    ]
  }

}
