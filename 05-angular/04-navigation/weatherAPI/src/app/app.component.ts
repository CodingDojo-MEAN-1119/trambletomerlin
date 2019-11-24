import { Component } from '@angular/core';
import { Http, Repsonse } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherAPI';
  // tslint:disable-next-line: max-line-length
  private apiUrl = 'https://samples.openweathermap.org/data/2.5/group?id=4990729,3582383,4994358,4407010&units=metric&appid=b6907d289e10d714a6e88b30761fae22';
  data: any = {};
}

constructor(private http: Http) {
  console.log('hello location');
  this.

}
