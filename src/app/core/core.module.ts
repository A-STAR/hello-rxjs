import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
