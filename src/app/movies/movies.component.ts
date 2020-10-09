import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies: any[];


  constructor(private _MoviesService: MoviesService) {

  }
  getAllMovies(mediaType, x) {


    this._MoviesService.getAll(mediaType, x).subscribe((data) => {

      this.allMovies = data.results;
    })
  }

  ngOnInit(): void {
  }

}
