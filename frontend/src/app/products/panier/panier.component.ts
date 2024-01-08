import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Product } from "src/shared/models/product";
import { DelProduct, ClearProduct } from "src/shared/actions/product-action";
import { ProductState } from "src/shared/states/product-state";
import { Observable } from "rxjs";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.component.html",
  styleUrls: ["../../list/list.component.css"],
})
export class PanierComponent implements OnInit {
  total: number = 0;

  constructor(private store: Store) {}

  @Select(ProductState.getListeProducts) liste$: Observable<Product[]>;
  ngOnInit() {
    this.liste$.subscribe((liste) => {
      this.total = 0;
      liste.forEach((p) => {
        this.total += p.price;
      });
      // Round total, 2 decimals
      this.total = Math.round(this.total * 100) / 100;
    });
  }

  delProduct(p: Product): void {
    this.store.dispatch(new DelProduct(p));
  }

  clearCart(): void {
    this.store.dispatch(new ClearProduct());
  }
}
