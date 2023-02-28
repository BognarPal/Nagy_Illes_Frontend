import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  ListsComponent,
  NewsComponent,
  UserListComponent
} from './Components';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'',
    runGuardsAndResolvers: 'always',
    children:[
      
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
