import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { RestangularModule } from 'ngx-restangular';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './user.service';
import { UsersComponent } from './users/users.component';
import { ModalModule } from 'ngx-bootstrap';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

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
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [EditUserComponent, CreateUserComponent, DeleteUserComponent],
})
export class AppModule { }
