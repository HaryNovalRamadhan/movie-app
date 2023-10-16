import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {

  public movies:any;
  public isLoading: boolean = false;


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = false
    this.movieService.getMovie().then(res => {
      this.movies = res.results
      this.isLoading = true
    })
  }

  homePage(){
    this.isLoading = false
    this.movieService.getMovie().then(res => {
      this.movies = res.results
      this.isLoading = true
    })
  }


  favoritePage(){
    this.isLoading = false
    let favoriteStorage = localStorage.getItem('favorites')
    const favoriteMovies = favoriteStorage? JSON.parse(favoriteStorage) : "null";

    if(favoriteMovies !== "null"){
        let movieArr = []
        movieArr.push(favoriteMovies)
        this.movies =  movieArr
        this.isLoading = true
    }

  }

}
