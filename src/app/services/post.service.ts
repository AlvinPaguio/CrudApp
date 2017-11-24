import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private posts: Post[];

  constructor(private restangular: Restangular) { }


  getUserPosts(id: string): Observable<Post[]> {
    return this.restangular.one('users', id).all('posts').getList();
  }

}
