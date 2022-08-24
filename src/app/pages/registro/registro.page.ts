import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  imagenSeleccionada: any;


  constructor() { }

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

  ngOnInit() {
  }

}
