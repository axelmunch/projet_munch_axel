import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, of } from "rxjs";
import { Product } from "../models/product";
import { environment } from "src/environments/environment";
import { Store } from "@ngxs/store";
import { AddProduct } from "src/shared/actions/product-action";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private store: Store
  ) {}

  product: Product = {
    ref: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  };

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      console.log(id);

      this.http
        .get<Product>(`${environment.backendProduct}/${id}`)
        .pipe(catchError(() => of({})))
        .subscribe((product: Product) => {
          console.log(product);
          this.product = product;
        });
    });
  }

  addProduct(p: Product) {
    if (p.ref == "") return;

    this.store.dispatch(new AddProduct(p));
  }
}
