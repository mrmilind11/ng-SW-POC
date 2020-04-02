import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.scss']
})
export class AdminDashboardContainerComponent implements OnInit {
  /********************************** Constructor *******************************/
  constructor(
    private router: Router
  ) { }
  /********************************** Properties ********************************/
  /********************************** Methods ***********************************/
  ngOnInit(): void {
  }

  public manageProducts() {
    this.router.navigate(['/admin/manageProduct']);
  }

  public manageOrders() {
    this.router.navigate(['/admin/manageOrder']);
  }

}
