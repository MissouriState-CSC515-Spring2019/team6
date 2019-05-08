import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component'
import { ConfigComponent } from './config/config.component'
import { HomeComponent } from './home/home.component'
import { ResultComponent } from './result/result.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'search/:id', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
