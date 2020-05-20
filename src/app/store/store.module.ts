import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CartSummaryComponent } from "./cartSummary.component";
import { CategoryFilterComponent } from "./categoryFilter.component";
import { PaginationComponent } from "./pagination.component";
import { ProductListComponent } from "./productList.component";
import { RatingsComponent } from "./ratings.component";
import { ProductSelectionComponent } from "./productSelection.component";
// Chapter 8
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdDropdownBasic } from "./dropdown.component";

@
NgModule({
  declarations: [
    CartSummaryComponent,
    CategoryFilterComponent,
    PaginationComponent,
    ProductListComponent,
    ProductSelectionComponent,
    RatingsComponent,
    NgbdDropdownBasic
  ],
  imports: [BrowserModule, NgbModule],
  exports: [ProductSelectionComponent]
})
export class StoreModule {

}
