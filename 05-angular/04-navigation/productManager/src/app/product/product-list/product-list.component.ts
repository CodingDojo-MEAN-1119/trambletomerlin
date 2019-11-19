import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.productService.getProducts()
    .subscribe( products => {
      console.log(products);
      this.products = products;
    });
  }

  onDelete(event: Event, id: string ) {
    event.stopPropagation();
    this.productService.removeProduct(id)
    .subscribe( deletedProduct => {
        this.products = this.products.filter( product => id !== product._id);
        console.log('this product is deleted');
    });

  }

}
