import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooModule} from './foo/foo.module';
import { FooDirective } from './foo.directive';
import { CapitalisePipe } from './capitalise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooDirective,
    CapitalisePipe
  ],
  imports: [
    FooModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
