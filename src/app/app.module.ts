import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Capitolo 4
import { ModelModule } from "./models/model.module";
// Chapter 6
//import { CategoryFilterComponent } from "./structure/categoryFilter.component";
//import { ProductTableComponent } from "./structure/productTable.component";
//import { ProductDetailComponent } from "./structure/productDetail.component";
// Chapter 8
import { FormsModule } from "@angular/forms";
import { StoreModule } from "./store/store.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    StoreModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
