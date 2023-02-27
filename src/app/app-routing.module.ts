import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { NewsComponent } from './news/news.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';

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
