import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component'
import { ConfigComponent } from './config/config.component'
import { HomeComponent } from './home/home.component'
import { ResultComponent } from './result/result.component'

const routes: Routes = [
  { path: '', redirectTo: '/home/highRes', pathMatch: 'full' },
  { path: 'home/:res', component: HomeComponent },
  { path: 'database/:res', component: DatabaseComponent },
  { path: 'config/:res', component: ConfigComponent },
  { path: 'search/:res/POD', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
