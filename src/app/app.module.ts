import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { SelectHeroesComponent } from './components/select-heroes/select-heroes.component';
import { CheckboardComponent } from './components/checkboard/checkboard.component';

import { MarvelDatabaseService } from './services/marvel-database.service';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeroProfileComponent,
    SelectHeroesComponent,
    CheckboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [MarvelDatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
