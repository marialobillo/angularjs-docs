import { Component } from "angular2/core"
import { OnInit } from "angular2/core"
import { Movie } from "../model/movie"
import { Router, RouteParams } from "angular2/router"
import { MoviesService } from "../services/movies.service"



@Component({
  templateUrl:"app/view/add-movie.html",
  providers: [MoviesService]
})

export class AddMovieComponent implements OnInit{

  public TitleMovie = "";

  constructor(private _moviesService: MoviesService,
    private _router: Router, private _routeParams :RouteParams){

  }

  onAddMovie(title, director, year){
    let movie: Movie = new Movie(77, title, director, year);
    this._moviesService.insertMovie(movie);

    //redirect
    this._router.navigate(["Movies"]);
  }

  ngOnInit():any{
    this.TitleMovie = this._routeParams.get("title");
  }

}
