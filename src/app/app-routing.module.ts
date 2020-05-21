import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Chapter 8
import { ProductSelectionComponent } from "./store/productSelection.component";
// Chapter 9
import { CartDetailComponent } from "./store/cartDetail.component";


const routes: Routes = [
  // Chapter 9
  { path: "cart", component: CartDetailComponent },
  // Chapter 8
  { path: "store/:category", component: ProductSelectionComponent },
  { path: "store", component: ProductSelectionComponent },
  { path: "", redirectTo: "/store", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
