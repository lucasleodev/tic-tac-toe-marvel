import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelDatabaseService } from 'src/app/services/marvel-database.service';

@Component({
  selector: 'app-select-heroes',
  templateUrl: './select-heroes.component.html',
  styleUrls: ['./select-heroes.component.scss'],
})
export class SelectHeroesComponent implements OnInit {
  startGame: boolean = false;
  heroesAreSelected: boolean[] = [false, false];
  heroes: Hero[] = [{}, {}];
  @Output() canStartGame: EventEmitter<boolean> = new EventEmitter();

  constructor(private marvelDB: MarvelDatabaseService) {}

  ngOnInit(): void {}

  confirmSelect(event: Hero, pos: number) {
    this.heroes[pos] = event;
    this.heroesAreSelected[pos] = true;
    let areSelected = this.heroesAreSelected.every((val) => val === true);
    this.startGame = areSelected ? true : false;
  }

  startTicTacToe() {
    console.log('Jogo iniciado');
    this.marvelDB.saveHero(this.heroes);
    this.canStartGame.emit(this.startGame);
  }
}
