import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './authors-create/author-create.component';

const routes: Routes = [
  { path: '', component: AuthorListComponent },
  { path: 'create', component: AuthorCreateComponent },
  { path: 'edit/:authorId', component: AuthorCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
