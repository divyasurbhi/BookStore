import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
  import { GetItems } from '../store/actions/actions';
    import { Product } from '../product/product.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  items: Product[] = [];
  constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
   }
 
 
 ngOnInit() {
    this.store.dispatch(new GetItems());
  }

}
