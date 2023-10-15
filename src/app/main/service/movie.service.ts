import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey:string="e4500ded31029b9e96905a77971a355b";
  private urlMovieDB:string="https://api.themoviedb.org/3"

  private rh:any;

  constructor(private httpClient: HttpClient) {
    // this.ApiUrl = environment.apiUrl;
  }



  async getMovie(){
    
    let url=`${this.urlMovieDB}/discover/movie?api_key=${this.apiKey}&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    try{
      this.rh = await lastValueFrom(this.httpClient.get<any>(url, {
        headers: new HttpHeaders({
          
        })
      }));
    }
    catch(err){
      this.rh = err
    }

    return this.rh;
  }


  async getMovieDetail(id:string){
    
    let url=`${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=en`
    try{
      this.rh = await lastValueFrom(this.httpClient.get<any>(url, {
        headers: new HttpHeaders({
          
        })
      }));
    }
    catch(err){
      this.rh = err
    }

    return this.rh;
  }
}
