import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  language = 'pt-BR';
  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=37e1e67cb1c9bf372412a70f841ec156';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  fetchGenre(): Observable<IListaGenero> {
    const url = `${this.apiUrl}genre/movie/list${this.key}&language=${this.language}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno => retorno),
      catchError(error => this.showError(error))
    );
  }

  async showError(error) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
