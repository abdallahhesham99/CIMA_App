import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popular: any[];

  topRated: any[];

  nowPlaying: any[];

  imgPrefix: string = "https://image.tmdb.org/t/p/w500/";

  constructor(private _MoviesService: MoviesService) {

    _MoviesService.getAll('movie', 'popular').subscribe((data) => {

      this.popular = data.results.slice(0, 10);
    })

    _MoviesService.getAll('movie', 'top_rated').subscribe((data) => {

      this.topRated = data.results.slice(0, 10);
    })

    _MoviesService.getAll('movie', 'now_playing').subscribe((data) => {

      this.nowPlaying = data.results.slice(0, 10);
    })

  }


  ngOnInit(): void {
  }

}
