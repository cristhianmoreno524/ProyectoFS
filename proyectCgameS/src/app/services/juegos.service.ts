import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Juego } from '../interfaces/juego';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ Noticia } from '../interfaces/noticia';


@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private juegosUrl = 'http://localhost:3456/juegos';
  private noticiasUrl = "http://localhost:3456/noticias";

  constructor(private http: HttpClient) { }

  getjuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.juegosUrl);
  }
  getnoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.noticiasUrl);
  }
}
