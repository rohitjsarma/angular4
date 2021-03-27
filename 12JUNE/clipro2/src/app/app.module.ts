import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import {OrderModule} from "ngx-order-pipe"
import {Ng2SearchPipeModule} from "ng2-search-filter"
import {NgxPaginationModule} from "ngx-pagination"
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    NgxPaginationModule,BrowserModule,OrderModule,Ng2SearchPipeModule,FormsModule
  ],
  providers: [],
  bootstrap: [Comp1Component,AppComponent]
})
export class AppModule { }
