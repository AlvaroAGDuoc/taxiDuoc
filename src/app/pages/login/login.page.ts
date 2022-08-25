import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any = {
    nombre: "Juan Perez",
    email: "",
    telefono: "932345678",
    clave: "",
    imagen: "../../../assets/foto.jpg",
    sede: "Plaza Norte"
  }

  constructor(private router: Router, private alertController: AlertController){}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Email o clave incorrectas',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

  pasarDatos() {
    let navigationExtras: NavigationExtras = {
      state: {
        nombre: this.usuario.nombre,
        email: this.usuario.email,
        telefono: this.usuario.telefono,
        contra: this.usuario.clave,
        imagen: this.usuario.imagen,
        sede: this.usuario.sede
      }
    };

    if(navigationExtras.state.email === 'juanp@duocuc.cl' && navigationExtras.state.contra === '123') {
      this.router.navigate(['/pantalla-principal'], navigationExtras);
    }
    else{
      this.presentAlert();
    }
  }
  ngOnInit() {}
}
