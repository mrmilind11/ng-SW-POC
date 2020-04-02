import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  /********************************** Constructor *******************************/
  constructor(
    private router: Router
  ) { }
  /********************************** Properties ********************************/
  /********************************** Methods ***********************************/
  ngOnInit(): void {
  }

  public viewCart() {
    this.router.navigate(['/user/cart']);
  }

  public viewOrders() {
    this.router.navigate(['/user/orders']);
  }

  public viewProducts() {
    this.router.navigate(['/user/products']);
  }
}
