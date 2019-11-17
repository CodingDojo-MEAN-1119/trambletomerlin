import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from '../authors.model';
import { AuthorsService } from '../authors.service';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
    // authors = [
    //     {title : 'First Author', name: 'Tramble'},
    //     {title : 'Second Author', name: 'Dave'},
    //     {title : 'Third Author', name: 'Carter'},
    //     {title : 'Fourth Author', name: 'Kim'}
    // ];
    authors: Author[] = [];
    private authorsSub: Subscription;

    constructor(public authorsService: AuthorsService) {}

    ngOnInit() {
        this.authorsService.getAuthors();
        this.authorsSub = this.authorsService.getAuhtorsUpdateListener()
            .subscribe((authors: Author[]) => {
            this.authors = authors;
            });
    }
    ngOnDestroy() {
        this.authorsSub.unsubscribe();
    }

    onDelete(authorId: string) {
        this.authorsService.deleteAuthor(authorId);
    }
}
