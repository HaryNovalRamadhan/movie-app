import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  public movie:any={};
  // public arrMovie : any[] = []
  public isLoading: boolean = false;
  public favorite: boolean = false;


  constructor(private route: ActivatedRoute,  private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp => {
      this.movieService.getMovieDetail(resp['id']).then(e => {
        this.movie = e
        let favoriteStorage = localStorage.getItem('favorites')
        const favoriteMovies = favoriteStorage? JSON.parse(favoriteStorage) : "null";
        
        if(favoriteMovies !== "null" && favoriteMovies.id == e.id){
          this.favorite = true
        }
        this.isLoading = true
      })
      
    })
  }


  toggleFavotite(){
    this.favorite = true
    // this.arrMovie.push(this.movie)
    localStorage.setItem('favorites', JSON.stringify(this.movie))
  }

  toggleUnFavotite(){
    this.favorite = false
    localStorage.removeItem('favorites')
  }

}
