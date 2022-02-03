import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square.model';

@Component({
  selector: 'app-checkboard',
  templateUrl: './checkboard.component.html',
  styleUrls: ['./checkboard.component.scss'],
})
export class CheckboardComponent implements OnInit {
  gameBoard: Square[] = [
    {
      field: [
        { idHero: 1, selected: false },
        { idHero: 2, selected: false },
        { idHero: 3, selected: false },
      ],
    },
    {
      field: [
        { idHero: 4, selected: false },
        { idHero: 5, selected: false },
        { idHero: 6, selected: false },
      ],
    },
    {
      field: [
        { idHero: 7, selected: false },
        { idHero: 8, selected: false },
        { idHero: 9, selected: false },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
