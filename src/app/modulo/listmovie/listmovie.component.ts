import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
import { IMoviePopular } from 'src/app/interfaces/myinterfaz';
import { CrudsService } from 'src/app/servicios/crud.service';



@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.css']
})
export class ListmovieComponent implements OnInit {
  ListMoviesPopulars : any = [];
  ImgMovieOrigin : string = "";

  filterPost = "";

  constructor(private Httpdata: CrudsService, private router:Router) { }

  ngOnInit(): void {
    this.ListMovie();
  }

  ListMovie():void{
   
    this.Httpdata.GetMoviePopular()
    .subscribe( 
        (datas : IMoviePopular)=> {     
          this.ListMoviesPopulars = datas.results; 
            console.log(datas.results);
            
            this.ImgMovieOrigin = this.Httpdata.ImagePeliculaMod;
            
      }, 
      (error:any)=>console.log(error),()=>
      {
        console.log("Respuesta completa")
      }
    );

  }

  ListSearchMovies():void{

    let termino = "Spider-Man";
    
    let targetSubjects  = this.ListMoviesPopulars.filter(x => {

      return x.title.indexOf('Spider') > -1;
        
      });
      
    console.log(targetSubjects);
  }

  

}
