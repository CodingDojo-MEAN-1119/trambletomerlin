import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, retry } from 'rxjs/operators';

import { Author } from './authors.model';

@Injectable({providedIn: 'root'})
export class AuthorsService {
    private authors: Author[] = [];
    private authorsUpdated = new Subject<Author[]>();

    constructor(private http: HttpClient) {}

    getAuthors() {
        this.http
            .get<{name: string, authors: any }>(
                'http://localhost:8000/authors'
            )
        .pipe(map((authorData) => {
            return authorData.authors.map(author => {
                return {
                    name: author.name,
                    id: author._id
                };
            });
        }))
        .subscribe(transformedAuthors => {
            this.authors = transformedAuthors;
            this.authorsUpdated.next([...this.authors]);
        });
    }
    getAuhtorsUpdateListener() {
        return this.authorsUpdated.asObservable();
    }

    getAuthor(id: string) {
        return {...this.authors.find(a => a.id === id)};
    }

    addAuthor(name: string) {
        const author: Author = { id: null, name };
        this.http.post<{message: string, authorId: string}>('http://localhost:8000/authors', author)
            .subscribe((responseData) => {
                const id = responseData.authorId;
                author.id = id;
                this.authors.push(author);
                this.authorsUpdated.next([...this.authors]);
            });
    }

    updateAuthor(id: string, name: string ) {
        const author: Author = {id, name};
        this.http.put('http://localhost:8000/authors/' + author.id, author)
                .subscribe(response => console.log(response));
    }

    deleteAuthor(authorId: string) {
        this.http.delete('http://localhost:8000/authors/' + authorId)
        .subscribe(() => {
            const updatedAuthors = this.authors.filter(author => author.id !== authorId);
            this.authors = updatedAuthors;
            this.authorsUpdated.next(...[this.authors]);
        });
    }
}
