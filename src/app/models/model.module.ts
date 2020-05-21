import { NgModule } from "@angular/core";
import { Repository } from "./repository";
// Chapter 5
import { HttpClientModule, HttpClient } from "@angular/common/http";
// Chapter 8
import { NavigationService } from "./navigation.service";
// Chapter 9
import { Cart } from "./cart.model";


@NgModule({
  imports: [HttpClientModule],
  providers: [Repository, NavigationService, Cart]
})
export class ModelModule {

}
