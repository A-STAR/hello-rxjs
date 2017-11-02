import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
