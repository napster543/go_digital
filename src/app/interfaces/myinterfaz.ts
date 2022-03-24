

export interface IMoviePopular 
{
    page : number;
    results : IlistMoviePopular;
    total_pages : number;    
    total_results : number;    
}

export interface IlistMoviePopular 
{
    poster_path : string;
    adult : string;
    overview : string;
    release_date : string;
    genre_ids : any;
    id : number;
    original_title : string;
    original_language : string;
    title : string;
    backdrop_path : string;
    popularity : number;
    vote_count : number;
    video : boolean;
    vote_average : number;
}
    
export interface Igeneros
{
    id:number;
    name:number;
}

export interface Iproduction_companies
{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;

}

export interface Iproduction_countries      
{
    iso_3166_1: string;
    name: string;
}


export interface Ispoken_languages
{
    iso_639_1: string;
    name: string;
}


export interface IMovieDetails
{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: Igeneros;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Iproduction_companies;
    production_countries: Iproduction_countries;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Ispoken_languages;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  
}

/** ****************************************************************** */

export interface Iresponse 
{
    Estatus : boolean;
    Message : string;
    Data : any;    
}


export interface UserLogin 
{
    usuario : string;
    clave : string;    
}

export interface Cliente {
    id:string;
    nombre: string;
    apellido: string;
    direccion: string;
    edad: string;
    telefono: string;
    celular: string;
    correo: string;
}

export interface Producto {
    id:number;
    producto: string;
    stock: string;
    cantidad: number;
    precio: number;
    
}

export interface Comprar {    
    cliente: string;
    producto: string;
    cantidad: number;
    precio: number;
    
}
