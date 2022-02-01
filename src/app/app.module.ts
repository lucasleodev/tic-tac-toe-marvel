import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';

import { MarvelDatabaseService } from './services/marvel-database.service';

@NgModule({
  declarations: [AppComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MarvelDatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
