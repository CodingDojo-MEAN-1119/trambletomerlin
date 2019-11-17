import { Component } from '@angular/core';
import { Author } from './authors/authors.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedAuthors: Author[] = [];

  onAuthorAdded(author) {
    this.storedAuthors.push(author);
  }
}
