import { NgModule } from "@angular/core";
import { Repository } from "./repository";
// Chapter 5
import { HttpClientModule, HttpClient } from "@angular/common/http";



@NgModule({
  imports: [HttpClientModule],
  providers: [Repository]
})
export class ModelModule {

}
