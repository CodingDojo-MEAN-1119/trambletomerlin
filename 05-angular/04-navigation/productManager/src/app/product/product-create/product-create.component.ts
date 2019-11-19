import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/products';

import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  product = new Product();

  @Output()
  createProduct = new EventEmitter<Product>();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value);
    this.productService.createProduct(form.value).subscribe(createProduct => {
      console.log(createProduct);
      this.product = new Product();
      form.reset();

      this.router.navigateByUrl('/');
    });
  }
}

