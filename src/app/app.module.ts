import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { RestangularModule } from 'ngx-restangular';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import { ModalModule } from 'ngx-bootstrap';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { PostService } from './services/post.service';
import { TodoService } from './services/todo.service';
import { UserStores } from './stores/user.stores';

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com/');
  RestangularProvider.setPlainByDefault(true);
}

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersComponent,
    EditUserComponent,
    CreateUserComponent,
    DeleteUserComponent
  ],
  imports: [
    ModalModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, PostService, TodoService, UserStores],
  bootstrap: [AppComponent],
  entryComponents: [EditUserComponent, CreateUserComponent, DeleteUserComponent],
})
export class AppModule { }
