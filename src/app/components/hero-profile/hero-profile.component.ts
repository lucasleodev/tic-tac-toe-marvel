import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelDatabaseService } from 'src/app/services/marvel-database.service';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
})
export class HeroProfileComponent implements OnInit {
  constructor(private marvelDB: MarvelDatabaseService) {}
  player: Hero = {};

  ngOnInit(): void {}

  searchHero() {
    this.marvelDB
      .searchMarvelCharacter(this.player.name)
      .subscribe((res) => console.log(res));
  }
}
