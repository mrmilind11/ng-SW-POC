import { ServiceWorkerUtilityService } from './modules/shared/services/service-worker-utility.service';
import { Router, NavigationError } from '@angular/router';
import { Component, OnInit, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /********************************************* Constructor ***************************************/
  constructor(
    private serviceWorkerUtilityService: ServiceWorkerUtilityService,
    private applicationRef: ApplicationRef
  ) { }
  /********************************************* Properties ****************************************/
  /********************************************* Methods *******************************************/
  title = 'poc-sw';
  ngOnInit() {
    this.applicationRef.isStable.subscribe(() => {
      console.log('Application is stable');
    })
    this.serviceWorkerUtilityService.initialiseSWUpdateCheck();
  }
  // private setUpdateListener() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationError) {
  //       const errorCheck = /ChunkLoadError: Loading chunk (.*) failed/;
  //       if (errorCheck.test(event.error)) {
  //         console.log(event.url);
  //         const newUrl = window.location.protocol + '//' + window.location.host + '/#' + event.url;
  //         window.location.assign(newUrl);
  //         window.location.reload();
  //       }
  //     }
  //   })
  // }
  // private swAvailable() {
  //   console.log('sw update');
  //   this.swUpdate.available.subscribe((response) => {
  //     console.log('response', response);
  //     if (response) {
  //       let confirmReload = confirm('New version is available');
  //       if (confirmReload) {
  //         window.location.reload();
  //       }
  //       else {
  //         clearInterval(this.intervalForCheck);
  //       }
  //     }
  //   })
  // }
  // private checkForSwUpdate() {
  //   console.log('check for sw update')
  //   this.intervalForCheck = setInterval(() => {
  //     //   console.count('check ')
  //     this.swUpdate.checkForUpdate().then((response) => {
  //       console.count('response');
  //     })
  //     //   // this.swUpdate.available.subscribe((response) => {
  //     //   //   if (response.available) {
  //     //   //     console.log(response);
  //     //   //     let confirmReload = confirm('New version is available');
  //     //   //     if (confirmReload) {
  //     //   //       window.location.reload();
  //     //   //     }
  //     //   //   }
  //     //   // })
  //   }, 10000);
  // }
}
