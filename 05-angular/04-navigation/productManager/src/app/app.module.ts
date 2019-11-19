import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HomeComponent } from './product/home/home.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductHomeComponent,
    ProductCreateComponent,
    ProductViewComponent,
    ProductListComponent,
    HomeComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
