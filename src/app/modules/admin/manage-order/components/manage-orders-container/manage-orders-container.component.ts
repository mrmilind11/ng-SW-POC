import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders-container',
  templateUrl: './manage-orders-container.component.html',
  styleUrls: ['./manage-orders-container.component.scss']
})
export class ManageOrdersContainerComponent implements OnInit {
  /********************************* Constructor ******************************/
  constructor() { }
  /********************************* Properties *******************************/
  public displayedColumns: string[] = ['name', 'quantity', 'date', 'amount'];
  public ordersList = [];
  /********************************* Methods **********************************/
  ngOnInit(): void {
    this.getOrdersList();
  }
  private getOrdersList() {
    this.ordersList = [
      { name: 'Bluetooth speakers', quantity: 2, date: new Date(2019, 3, 5), amount: 1500 },
      { name: 'Washing powder', quantity: 1, date: new Date(2020, 0, 15), amount: 250 },
      { name: 'Sanitizer', quantity: 5, date: new Date(2020, 1, 25), amount: 350 },
      { name: 'Masks', quantity: 2, date: new Date(2020, 2, 5), amount: 400 },
      { name: 'Hand wash', quantity: 2, date: new Date(2020, 2, 5), amount: 400 },
    ]
  }
}
