import { Component, OnInit } from '@angular/core';
import { IFilme } from 'src/app/models/IFilme.model';
import { DatamodelService } from 'src/app/services/datamodel.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilme;

  constructor(
    public datamodelService: DatamodelService
  ) { }

  ngOnInit() {
    this.filme = this.datamodelService.getData('filme');
    console.log('Filme enviado',this.filme);
  }

}
