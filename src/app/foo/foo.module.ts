import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooComponent} from './foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooComponent, BarComponent],
  exports: [BarComponent, FooComponent]
})
export class FooModule { }
