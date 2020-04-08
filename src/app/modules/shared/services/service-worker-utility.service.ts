import { Router, NavigationError } from '@angular/router';
import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerUtilityService {
  /********************************************* Constructor ***************************************/
  constructor(
    private router: Router,
    private swUpdate: SwUpdate
  ) { }
  /********************************************* Properties ****************************************/
  private intervalForCheck = null;
  private intervalDurationInSecond = 30;
  public newVersionAvailable = false;
  /********************************************* Methods *******************************************/
  public initialiseSWUpdateCheck() {
    console.log('sw enabled', this.swUpdate.isEnabled);
    this.swUpdate.available.subscribe((response) => {
      console.log('Available', response);
      this.newVersionAvailable = true;
      this.clearIntervalForUpdateCheck();
      this.showVersionUpdateMessage();
    })
    this.setIntervalForUpdateCheck();
    this.handleChunkLoadError();
  }
  private clearIntervalForUpdateCheck() {
    if (this.intervalForCheck) {
      clearInterval(this.intervalForCheck);
    }
  }
  private handleChunkLoadError() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationError) {
        const errorCheck = /ChunkLoadError: Loading chunk (.*) failed/;
        if (errorCheck.test(event.error)) {
          console.log(event.url);
          this.showVersionUpdateMessage();
          // const newUrl = window.location.protocol + '//' + window.location.host + '/#' + event.url;
          // window.location.assign(newUrl);
          // window.location.reload();
        }
      }
    })
  }
  private setIntervalForUpdateCheck() {
    this.intervalForCheck = setInterval(() => {
      this.swUpdate.checkForUpdate().then(() => { console.count('Update check') });
    }, this.intervalDurationInSecond * 1000)
  }
  private showVersionUpdateMessage() {
    const confirmReload = confirm('New version of this app is available. Reload and update now?');
    if (confirmReload) {
      window.location.reload();
    }
  }
}
