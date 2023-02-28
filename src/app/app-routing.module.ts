import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {
  HomeComponent,
  ListsComponent,
  NewsComponent,
  UserDetailComponent,
  UserListComponent
} from './components';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children:[
      
      {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
      {path: 'users/:id', component: UserDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'news', component: NewsComponent},
      {path: '**', component: HomeComponent, pathMatch: "full"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
