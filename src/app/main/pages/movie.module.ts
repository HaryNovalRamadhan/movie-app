import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



@NgModule({
  declarations: [
   
  
    MovieDetailComponent
  ],
  imports: [
    RouterModule.forChild([
        { path: '', component: MovieHomeComponent },
        { path: 'detail/:id', component: MovieDetailComponent }
    ]),
    CommonModule
  ],
    
})
export class MovieModule { }
