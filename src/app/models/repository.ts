import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Filter } from "./configClasses.repository";
import { Supplier } from "./supplier.model";

const productUrl = "/api/products";
const supplierUrl = "/api/suppliers";

@Injectable()
export class Repository {
  product: Product;
  // Chapter 5
  products: Product[];
  filter: Filter = new Filter();
  // Chapter 6
  suppliers: Supplier[]=[];

  constructor(private http: HttpClient) {
   
    this.filter.related = true;
    this.getProducts();
  }
  // Get - Get Product, Supplier and List Products,Suppliers
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

  getSuppliers() {
    this.http.get<Supplier[]>(supplierUrl).subscribe(sups => this.suppliers = sups);
  }

  // Post - Create Product and Supplier
  createProduct(prod: Product) {
    let data = {
      name: prod.name,
      category: prod.category,
      description: prod.description,
      price: prod.price,
      supplier: prod.supplier ? prod.supplier.supplierId : 0
    };

    this.http.post<number>(productUrl, data).subscribe(id => {
      prod.productId = id;
      this.products.push(prod);
    });
  }

  createProductAndSupplier(prod: Product, supp: Supplier) {
    let data = {
      name: supp.name,
      city: supp.city,
      state: supp.state
    };

    this.http.post<number>(supplierUrl, data).subscribe(id => {
      supp.supplierId = id;
      prod.supplier = supp;
      this.suppliers.push(supp);
      if (prod != null) {
        this.createProduct(prod);
      }
    });
  }
  // Update - Update Product and Supplier
  replaceProduct(prod: Product) {
    let data = {
      name: prod.name,
      category: prod.category,
      description: prod.description,
      price: prod.price,
      supplier: prod.supplier ? prod.supplier.supplierId : 0
    };
    this.http.put(`${productUrl}/${prod.productId}`, data).subscribe(() => this.getProducts());
  }

  replaceSupplier(supp: Supplier) {
    let data = {
      name: supp.name,
      city: supp.city,
      state: supp.state
    };

    this.http.put(`${supplierUrl}/${supp.supplierId}`, data).subscribe(() => this.getProducts());

  }

  // Delete - Delete Product and Supplier
  deleteProduct(id: number) {
    this.http.delete(`${productUrl}/${id}`).subscribe(() => this.getProducts());
  }

  deleteSupplier(id: number) {
    this.http.delete(`${supplierUrl}/${id}`).subscribe(() => {
      this.getProducts();
      this.getSuppliers();
    });
  }
}
