import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movie: any[], term: string): any {

    if (!movie || !term) {
      return movie;
    }
    return movie.filter((movie) => {
      movie.title.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    })

  }

}
