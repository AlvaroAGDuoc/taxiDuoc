import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.page.html',
  styleUrls: ['./pantalla-principal.page.scss'],
})
export class PantallaPrincipalPage implements OnInit {


  usuario: any = {
    nombre: "",
    email: "",
    telefono: "",
    clave: "",
    imagen:"",
    sede: ""
  }

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.usuario.nombre = this.router.getCurrentNavigation().extras.state.nombre;
        this.usuario.email = this.router.getCurrentNavigation().extras.state.email;
        this.usuario.telefono = this.router.getCurrentNavigation().extras.state.telefono;
        this.usuario.clave = this.router.getCurrentNavigation().extras.state.contra;
        this.usuario.imagen = this.router.getCurrentNavigation().extras.state.imagen;
        this.usuario.sede = this.router.getCurrentNavigation().extras.state.sede;
      }
    });
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
    }

    this.router.navigate(['/perfil'], navigationExtras);
  }

  ngOnInit() {
  }

}
