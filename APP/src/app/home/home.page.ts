import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: Observable<any>;
  map: Observable<Response>;
  items: any;
  url: string;
  constructor(public http: HttpClient) {
    console.log('Hello RedditData Provider');
  }

  getRemoteData() {
    console.log('return');
    console.log(this.http.get('http://51.38.231.190/Utils/ionic/getData.php'));
  }



  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
