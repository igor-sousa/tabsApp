import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from '../models/APIFilme.model';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  language = 'pt-BR';
  region = 'BR';
  private apiUrl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=37e1e67cb1c9bf372412a70f841ec156';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  findMovie(search: string): Observable<IListaFilmes> {
    const url = `${this.apiUrl}search/movie${this.key}&language=${this.language}&region=${this.region}&query=${search}`;

    return this.http.get<IListaFilmes>(url).pipe(
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
