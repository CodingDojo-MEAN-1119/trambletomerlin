import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { environment } from '../environments/environment';

const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent
  },
{
path: 'products',
children: [
  {
    path: '',
    component: ProductListComponent
  },
  {
      path: ':id/edit',
      component: ProductEditComponent
    },
    {
      path: 'create',
      component: ProductCreateComponent
    },
    {
      path: ':id',
      component: ProductViewComponent
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
