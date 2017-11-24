import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../todo';
import { Post } from '../post';
import { PostService } from '../post.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  todos: Todo[];
  posts: Post[];

  constructor(private userService: UserService,
              private postService: PostService,
              private todoService: TodoService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getUserTodos();
    this.getUserPosts();
    console.log(this.getUserTodos());
  }

  getUserTodos(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.getUserTodos(id)
        .subscribe(todo => this.todos = todo);
  }

  getUserPosts(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.getUserPosts(id)
        .subscribe(post => this.posts = post);
  }


  goBack(): void {
    this.location.back();
  }

}
