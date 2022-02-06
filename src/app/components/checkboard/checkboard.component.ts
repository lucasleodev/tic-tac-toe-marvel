import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { Field, Square } from 'src/app/models/square.model';
import { MarvelDatabaseService } from 'src/app/services/marvel-database.service';

@Component({
  selector: 'app-checkboard',
  templateUrl: './checkboard.component.html',
  styleUrls: ['./checkboard.component.scss'],
})
export class CheckboardComponent implements OnInit {
  gameBoard!: Square[];

  heroes: Hero[] = [{}, {}];
  gameOver: boolean = false;
  player: Hero | undefined = {};
  winnerName: string = '';
  constructor(private marvelDB: MarvelDatabaseService) {}

  ngOnInit(): void {
    this.heroes = this.marvelDB.returnHeroes();
    this.resetBoard();
  }

  selectSquare(square: Field) {
    if (square.selected || this.gameOver) {
      return;
    }
    console.log(this.player);
    square.selected = true;
    square.idHero = this.player?.id;
    square.chartSelection = this.player?.chartSelection;
    this.verifyTicTacToe();
    if (!this.gameOver) this.changePlayer();
  }

  headOrTails() {
    this.heroes.forEach((hero) => {
      hero.firstPlayer = false;
    });
    let decision = Math.floor(Math.random() * 10);
    decision >= 4
      ? (this.heroes[0].firstPlayer = true)
      : (this.heroes[1].firstPlayer = true);
    this.heroes.map(
      (hero) => (hero.chartSelection = hero.firstPlayer ? 'X' : 'O')
    );
    this.player = Object.assign(
      {},
      this.heroes.find((hero) => hero.firstPlayer == true)
    );
  }

  changePlayer() {
    this.player = Object.assign(
      {},
      this.heroes.find((hero) => hero.firstPlayer == !this.player?.firstPlayer)
    );
  }

  resetBoard() {
    this.winnerName = '';
    this.gameOver = false;
    this.gameBoard = [
      {
        field: [
          { idSquare: 1, idHero: 0, selected: false, chartSelection: '' },
          { idSquare: 2, idHero: 0, selected: false, chartSelection: '' },
          { idSquare: 3, idHero: 0, selected: false, chartSelection: '' },
        ],
      },
      {
        field: [
          { idSquare: 4, idHero: 0, selected: false, chartSelection: '' },
          { idSquare: 5, idHero: 0, selected: false, chartSelection: '' },
          { idSquare: 6, idHero: 0, selected: false, chartSelection: '' },
        ],
      },
      {
        field: [
          { idSquare: 7, idHero: 0, selected: false, chartSelection: '' },
          { idSquare: 8, idHero: 0, selected: false, chartSelection: '' },
          { idSquare: 9, idHero: 0, selected: false, chartSelection: '' },
        ],
      },
    ];
    this.headOrTails();
  }

  verifyTicTacToe() {
    let winPossibilities = [
      //linhas horizontais
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      //linhas verticais
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      //linhas diagonais
      [1, 5, 9],
      [3, 5, 7],
    ];

    let boardToArray: number[] = [];

    this.gameBoard.map((row) =>
      row.field?.map((col) => boardToArray.push(col.idHero!))
    );

    /*winPossibilities.map((possibility) => {
      let rowToTest = [];
      for (let count = 0; count < 3; count++) {
        rowToTest.push(boardToArray[possibility[count] - 1]);
      }
      rowToTest.every((val) => val == this.player?.id);
    });*/

    for (let i = 0; i < winPossibilities.length; i++) {
      let rowToTest = [];

      for (let count = 0; count < 3; count++) {
        rowToTest.push(boardToArray[winPossibilities[i][count] - 1]);
      }
      let itsMatch = rowToTest.every((val) => val == this.player?.id);
      if (itsMatch) {
        this.gameOver = !this.gameOver;
        this.winnerName = `${this.player!.name!} venceu!`;
        this.heroes.forEach((hero) => {
          hero.id == this.player?.id ? hero.score!++ : undefined;
        });
        return;
      } else {
        let row1 = this.gameBoard[0].field!.map((col) => col.selected);
        let row2 = this.gameBoard[1].field!.map((col) => col.selected);
        let row3 = this.gameBoard[2].field!.map((col) => col.selected);
        let checkAll = [...row1, ...row2, ...row3];
        console.log(checkAll);
        if (checkAll.every((value) => value == true)) {
          console.log('tudo selecionado');
          this.gameOver = !this.gameOver;
          this.winnerName = 'Empate!';
          return;
        } else {
          console.log('tem chão ainda');
        }
      }
    }
    console.log('fim do loop');
  }
}
