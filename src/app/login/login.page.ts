import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  pwd: string;

  constructor(public toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login(): void {
    if(this.email.indexOf('@') > 0 && this.email.indexOf('.com') > 0) {
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Seja bem vindo!', 'success');
    }
    else {
      this.presentToast('Credenciais inválidas', 'danger');
    }
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

}
