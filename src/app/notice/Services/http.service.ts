import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const db = 'http://5aecb385f67ff700145106f4.mockapi.io/noticess';

@Injectable()
export class HttpService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getAllNotices(): Observable<any> {
    return this.http.get<any>(db);
  }

  addNotice(note: object): Observable<object> {
    return this.http.post<Object>(db, note);
    // return of(null);
  }

  getNoticeOne(id: number): Observable<Object> {
    return this.http.get<Object>(`${db}/${id}`);
  }

  updateNotice(notice: any) {
    return this.http.put<Object>(`${db}/${notice.id}`, notice);
  }

  deleteNotice(id: number): Observable<Object> {
    return this.http.delete<Object>(`${db}/${id}`);
  }

}
