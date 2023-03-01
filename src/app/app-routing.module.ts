import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  ListsComponent,
  NewsComponent,
  ProfileEditComponent,
  UserListComponent
} from './Components';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'',
    runGuardsAndResolvers: 'always',
    children:[
      {path: 'edit', component: ProfileEditComponent, },
      {path: 'users', component: UserListComponent, },
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
