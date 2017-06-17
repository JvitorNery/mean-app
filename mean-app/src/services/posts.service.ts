import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { IPosts } from './../model/posts';
import { environment } from './../environments/environment';


@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getAllPosts(): Observable<IPosts[]> {
    return this.http.get('/api/posts')
    .map(res => res.json())
    .catch((error : any) => Observable.throw(error.json().error || 'server error'));
  }

}
