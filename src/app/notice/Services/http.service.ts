import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const db = 'http://5aecb385f67ff700145106f4.mockapi.io/noticess';

@Injectable()
export class HttpService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getAllNotices(): Observable<Object> {
    return this.http.get(db);
  }

  getNoticeOne(id: number) {
    return this.http.get(`${db}/${id}`);
  }

}
