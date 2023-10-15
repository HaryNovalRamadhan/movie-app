import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie:any={};
  constructor(private route: ActivatedRoute,  private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp => {
      this.movieService.getMovieDetail(resp['id']).then(e => {
        this.movie = e
      })
      
    })
  }

}
