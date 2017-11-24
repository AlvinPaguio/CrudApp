import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserResolver } from './resolver/user-resolver';

const routes: Routes = [
  { path: '', redirectTo: '/add/users', pathMatch: 'full' },
  { path: 'add/users', component: UsersComponent, resolve: { users: UserResolver }},
  { path: 'users/:id/posts-todos', component: UserDetailsComponent },
  {path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [ UserResolver ]
})
export class AppRoutingModule {}