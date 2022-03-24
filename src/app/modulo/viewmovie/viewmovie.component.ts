import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieDetails, Iproduction_companies } from 'src/app/interfaces/myinterfaz';
import { CrudsService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {
  mostrarIdMovie : number;
  ImagePost:string;
  ImgMovieOrigin : string;
  public ListDetalleMovie : IMovieDetails;
  public ListProductCompanies : any;
  constructor(private router: Router, private rutaActiva: ActivatedRoute, private Httpdata: CrudsService) { 
    
    
    this.mostrarIdMovie = rutaActiva.snapshot.params["id_movie"];
    this.GetViewMoviesOne(this.mostrarIdMovie);
  }

  ngOnInit(): void {
    this.ImgMovieOrigin = this.Httpdata.ImagePeliculaOriginal;
  }

  GetViewMoviesOne(id_movie:number):void{
    this.Httpdata.GetMovieOne(id_movie)
    .subscribe( 
        (datas : IMovieDetails)=> {     
          console.log(datas);       
          this.ImagePost = this.ImgMovieOrigin + datas.poster_path;     
          this.ListDetalleMovie = datas as IMovieDetails;
           this.ListProductCompanies = datas.production_companies;
            
            
      }, 
      (error:any)=>console.log(error),()=>
      {
        console.log("Respuesta completa")
      }
    );
  }

}
