import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCreateComponent } from './products_and_reviews/products-create/products-create.component';
import { ReviewCreateComponent } from './products_and_reviews/reviews-create/reviews-create.component';
import { HomeComponent } from './products_and_reviews/home/home.component';
import { ProductDetailsComponent } from './products_and_reviews/product-details/product-details.component';
import { ProductsBrandComponent } from './products_and_reviews/products-brand/products-brand.component';
import { ProductsCategoryComponent } from './products_and_reviews/products-category/products-category.component';
import { ReviewsDetailComponent } from './products_and_reviews/reviews-detail/reviews-detail.component';
import { ReviewsAuthorComponent } from './products_and_reviews/reviews-author/reviews-author.component';
import { ReviewsAllComponent } from './products_and_reviews/reviews-all/reviews-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCreateComponent,
    ReviewCreateComponent,
    HomeComponent,
    ProductDetailsComponent,
    ProductsBrandComponent,
    ProductsCategoryComponent,
    ReviewsDetailComponent,
    ReviewsAuthorComponent,
    ReviewsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
