import { Component, OnInit } from '@angular/core';
import { APIFilme } from 'src/app/models/APIFilme.model';
import { DatamodelService } from 'src/app/services/datamodel.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: APIFilme;

  genres: string[] = [];

  constructor(
    public datamodelService: DatamodelService
  ) { }

  ngOnInit() {
    this.filme = this.datamodelService.getData('filme');
    this.genres = this.datamodelService.getData('genres');
    console.log('Filme enviado',this.filme);
  }

}
