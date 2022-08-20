import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router, private alertController: AlertController){}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'This is an alert!',
      buttons: ['a'],
    });

    await alert.present();
  }

  pasarDatos() {
    let navigationExtras: NavigationExtras = {
      state: {
        usu: this.usuario,
        contra: this.contrasena
      }
    };

    if(navigationExtras.state.usu === 'juan' && navigationExtras.state.contra === '123') {
      this.router.navigate(['/pantalla-principal'], navigationExtras);
    }
    else{
      this.presentAlert();
    }
  }
  ngOnInit() {}
}
