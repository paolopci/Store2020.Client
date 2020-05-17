import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Filter } from "./configClasses.repository";


const productUrl = "/api/products";


@Injectable()
export class Repository {

  product: Product;
  // Chapter 5
  products: Product[];
  filter: Filter=new Filter();

  constructor(private http: HttpClient) {
    this.filter.category = 'soccer';
    this.filter.related = true;
    this.getProducts();
  }

  getProduct(id: number) {
    this.http.get<Product>("/api/products/" + id).subscribe(p => {
      this.product = p;
      console.log("Product Data Received");
    });
  }

  getProducts() {

    let url = `${productUrl}?related=${this.filter.related}`;
    if (this.filter.category) {
      url += `&category=${this.filter.category}`;
    }

    if (this.filter.search) {
      url += `&search=${this.filter.search}`;
    }

    this.http.get<Product[]>(url).subscribe(prods => this.products = prods);
  }


}
