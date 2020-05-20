import { Component } from "@angular/core";
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";


@Component({
  selector: "ngbd-pagination",
  templateUrl: "productList.component.html"
})
export class ProductListComponent {

  selectNumberItem: number = 10;
  sortELement: number[] = [10, 20, 50, 100];
  // Chapter 8 pagination
  page = 1; //pagina iniziale
  pageSize = 10; // elementi per pagina
  maxSize=10; // indica il numero di pagine sequenziali iniziali tipo 1.. 2,3,4,5,6,7,8,10,11.. 200


  constructor(private repo: Repository) {}

  get products(): Product[] {
    return this.repo.products;
  }

  // Chapter 8 - serve per selezionare gli elementi x tabella dal dropdown
  changeElement(nElement: number) {
    this.selectNumberItem = nElement;
    this.pageSize = this.selectNumberItem;
  }
}
