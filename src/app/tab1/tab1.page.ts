import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilme } from '../models/IFilme.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = 'Streaming App';
  videoList: IFilme[] = [
    {
    name!: 'Venom: Tempo de Carnificina (2021)',
    launchDate!: '07/10/2021',
    duration: '1h 37m',
    rating: 74,
    image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kz7xJLowO4x0BpcB1IJb9uIXgrq.jpg',
    genre: ['Ficção científica','Ação']
    },
    {
      name!: 'A Perseguição (2011)',
      launchDate: '20/04/2012',
      duration: '1h 57m',
      rating: 66,
      image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a0Vt3wx8ciKmPt4iXPx9sH4HBVU.jpg',
      genre: ['Drama','Ação','Aventura']
      }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async showAlertFav() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja <strong>favoritar</strong> este filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            this.showToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
