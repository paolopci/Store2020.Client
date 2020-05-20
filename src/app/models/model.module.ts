import { NgModule } from "@angular/core";
import { Repository } from "./repository";
// Chapter 5
import { HttpClientModule, HttpClient } from "@angular/common/http";
// Chapter 8
import { NavigationService } from "./navigation.service";


@NgModule({
  imports: [HttpClientModule],
  providers: [Repository, NavigationService]
})
export class ModelModule {

}
