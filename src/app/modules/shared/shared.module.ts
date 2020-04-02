import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';



@NgModule({
  declarations: [HeaderBarComponent, FooterBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: []
})
export class SharedModule { }
