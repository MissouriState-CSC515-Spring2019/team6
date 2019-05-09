import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component'
import { ConfigComponent } from './config/config.component'
import { HomeComponent } from './home/home.component'
import { ResultComponent } from './result/result.component'

const routes: Routes = [
  { path: '', redirectTo: '/home/English', pathMatch: 'full' },
  { path: 'home/:lang', component: HomeComponent },
  { path: 'database/:lang', component: DatabaseComponent },
  { path: 'config/:lang', component: ConfigComponent },
  { path: 'search/:lang/:param', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
