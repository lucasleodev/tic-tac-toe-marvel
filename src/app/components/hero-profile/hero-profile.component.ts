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
  nameHero: string = '';
  player: Hero = {};

  ngOnInit(): void {}

  searchHero() {
    this.marvelDB.searchMarvelCharacter(this.nameHero).subscribe((res) => {
      console.log(res);
      if (res.data?.results?.length == 1) {
        this.player.name = res.data.results[0].name;

        let imageURL = `${res.data.results[0].thumbnail?.path}/detail.${res.data.results[0].thumbnail?.extension}`;
        this.player.thumbnail = imageURL;
        console.error('SEU PAI TENTOU ME MAMAR, ELE SE MAMOU');
      }
    });
  }
}
