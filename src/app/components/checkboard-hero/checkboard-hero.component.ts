import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-checkboard-hero',
  templateUrl: './checkboard-hero.component.html',
  styleUrls: ['./checkboard-hero.component.scss'],
})
export class CheckboardHeroComponent implements OnInit {
  @Input() hero: Hero = {};

  constructor() {}

  ngOnInit(): void {}
}
