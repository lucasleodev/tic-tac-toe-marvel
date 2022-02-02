import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelDatabaseService } from 'src/app/services/marvel-database.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private marvelDB: MarvelDatabaseService) {}

  player01: Hero = {};
  player02: Hero = {};
  gameStatus: boolean = false;

  ngOnInit(): void {}

  searchHero() {
    this.marvelDB
      .searchMarvelCharacter(this.player01.name)
      .subscribe((res) => console.log(res));
  }

  startGame(event: any) {
    this.gameStatus = event;
  }
}
