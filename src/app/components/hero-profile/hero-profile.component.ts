import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() sendHero: EventEmitter<Hero> = new EventEmitter();

  ngOnInit(): void {}

  searchHero() {
    this.marvelDB.searchMarvelCharacter(this.nameHero).subscribe((res) => {
      if (res.data?.results?.length == 1) {
        this.player.name = res.data.results[0].name;
        this.player.thumbnail = `${res.data.results[0].thumbnail?.path}/standard_large.${res.data.results[0].thumbnail?.extension}`;
        this.player.thumbnailGame = `${res.data.results[0].thumbnail?.path}/portrait_fantastic.${res.data.results[0].thumbnail?.extension}`;
        this.player.score = 0;
        this.player.firstPlayer = false;
        this.player.id = res.data.results[0].id;
        this.sendHero.emit(this.player);
      } else {
        this.player.name = 'Pesquise de novo';
        let imageURL = `assets/notFound.png`;
        this.player.thumbnail = imageURL;
      }
    });
  }
}
