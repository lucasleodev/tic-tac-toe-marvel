import { Component, OnInit } from '@angular/core';
import { MarvelDatabaseService } from 'src/app/services/marvel-database.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private marvelDB: MarvelDatabaseService) {}

  ngOnInit(): void {
    this.marvelDB.searchMarvelCharacter();
  }

  searchHero() {}
}
