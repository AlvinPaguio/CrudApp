import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todos';
import { Post } from '../posts';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  todos: Todo[];
  posts: Post[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getUserTodos();
    this.getUserPosts();
    console.log(this.getUserTodos());
  }

  getUserTodos(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserTodos(id)
        .subscribe(todo => this.todos = todo);
  }

  getUserPosts(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserPosts(id)
        .subscribe(post => this.posts = post);
  }


  goBack(): void {
    this.location.back();
  }

}
