import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  imagenSeleccionada: any;

  usuario: any = {
    nombre: "",
    email: "",
    telefono: "",
    clave: "",
    imagen: "",
    sede: ""
  }

  constructor(private router: Router) { }

  checkPlatformForWeb() {
    if (Capacitor.getPlatform() == 'web') return true;
    return false;
  }

 async obtenerFoto() {
    const imagen = await Camera.getPhoto({
      quality: 90,
      width: 200,
      height: 200,
      source: CameraSource.Photos,
      resultType: this.checkPlatformForWeb() ? CameraResultType.DataUrl: CameraResultType.Uri
    });
    this.imagenSeleccionada = imagen;
    if(this.checkPlatformForWeb()) this.imagenSeleccionada.webPath = imagen.dataUrl;
  }

  pasarDatos() {
    let navigationExtras: NavigationExtras = {
      state: {
        nombre: this.usuario.nombre,
        email: this.usuario.email,
        telefono: this.usuario.telefono,
        contra: this.usuario.clave,
        imagen: this.imagenSeleccionada,
        sede: this.usuario.sede
      }
    }
    this.router.navigate(['/pantalla-principal'], navigationExtras);
  }

  ngOnInit() {
  }

}
