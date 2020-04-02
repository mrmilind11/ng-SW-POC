import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  /******************************** Constructor **************************/
  constructor(
    private router: Router
  ) { }
  /******************************** Properties ***************************/
  private routerSub = new Subscription();
  public userOrAdmin: 'USER' | 'ADMIN' = 'USER';
  private currentUrl = '';
  /******************************** Methods ******************************/
  ngOnInit(): void {
    this.setUpdateListener();
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
  private setUpdateListener(): void {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.setAdminOrUserSide();
      }
    })
  }

  private setAdminOrUserSide(): void {
    if (this.currentUrl.indexOf('/admin') === 0) {
      this.userOrAdmin = 'ADMIN';
    }
    else {
      this.userOrAdmin = 'USER';
    }
  }
  public switchSection(): void {
    this.router.navigate([this.userOrAdmin === 'USER' ? '/admin' : '/user']);
  }

}
