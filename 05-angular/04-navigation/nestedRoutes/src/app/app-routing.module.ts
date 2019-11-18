import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './products_and_reviews/products-create/products-create.component';
import { ReviewCreateComponent } from './products_and_reviews/reviews-create/reviews-create.component';
import { HomeComponent } from './products_and_reviews/home/home.component';
import { ProductDetailsComponent } from './products_and_reviews/product-details/product-details.component';
import { ProductsBrandComponent } from './products_and_reviews/products-brand/products-brand.component';
import { ProductsCategoryComponent } from './products_and_reviews/products-category/products-category.component';
import { ReviewsDetailComponent } from './products_and_reviews/reviews-detail/reviews-detail.component';
import { ReviewsAuthorComponent } from './products_and_reviews/reviews-author/reviews-author.component';
import { ReviewsAllComponent } from './products_and_reviews/reviews-all/reviews-all.component';


const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
  path: 'product',
  children: [
    {
      path: '',
      component: ProductCreateComponent
    },
    {
      path: 'details',
      component: ProductDetailsComponent
    },
    {
      path: 'brand',
      component: ProductsBrandComponent
    },
    {
      path: 'category',
      component: ProductsCategoryComponent
    }
  ]
  },
  {
  path: 'review',
  children: [
    {
      path: '',
      component: ReviewCreateComponent
    },
    {
      path: 'details',
      component: ReviewsDetailComponent
    },
    {
      path: 'author',
      component: ReviewsAuthorComponent
    },
    {
      path: 'all',
      component: ReviewsAllComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
