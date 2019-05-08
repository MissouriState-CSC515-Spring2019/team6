import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ConfigComponent } from './config/config.component';
import { DatabaseComponent } from './database/database.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';
import { SearchbarService } from './searchbar.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ConfigComponent,
    DatabaseComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SearchbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
