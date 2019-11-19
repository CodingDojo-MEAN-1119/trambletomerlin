import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap} from 'rxjs/operators';
import { Product} from 'src/app/models/products';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    product: Product;

  constructor(
    private route: ActivatedRoute,
    private readonly productSerivce: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.productSerivce.getProduct(id)),
    )
    .subscribe(product => {
      console.log('product came from api', product);
      this.product = product;
    });
  }
  onSubmit(event: Event, form: NgForm) {
     console.log('editing the product', {...form.value, _id: this.product._id});

     this.productSerivce
     .updateProduct({...form.value, _id: this.product._id})
     .subscribe(updatedProduct => {
        console.log('updated the book, bro.', updatedProduct);
// api/products?
        this.router.navigate(['/products', updatedProduct._id]);
     });
  }
}
