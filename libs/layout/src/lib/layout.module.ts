import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material/src/lib/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule {}
