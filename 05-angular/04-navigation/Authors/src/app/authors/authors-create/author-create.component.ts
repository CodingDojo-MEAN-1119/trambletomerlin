import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthorsService } from '../authors.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Author } from '../authors.model';


@Component({
    selector: 'app-author-create',
    templateUrl: './author-create.component.html',
    styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
    enteredName = '';
    newAuthor = 'Add Author Name Here!';
    author = new Author();
    private mode = 'create';
    private authorId: string;


    constructor(public authorsService: AuthorsService, public route: ActivatedRoute) {}


    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          if (paramMap.has('authorId')) {
            this.mode = 'edit';
            this.authorId = paramMap.get('authorId');
            this.author = this.authorsService.getAuthor(this.authorId);
          } else {
            this.mode = 'create';
            this.authorId = null;
          }
        });
      }

    onSaveAuthor(form: NgForm) {
        console.log('Author Added');
        if (form.invalid) {
            return;
        }
        if (this.mode === 'create') {
            console.log('create');
            this.authorsService.addAuthor(form.value.name);
        } else {
            console.log('update');
            this.authorsService.updateAuthor(
                this.authorId,
                form.value.name
            );
        }
        this.authorsService.addAuthor(form.value.name);
        form.resetForm();
    }
}
