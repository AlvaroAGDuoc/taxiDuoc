import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {
    nombre: "",
    email: "",
    telefono: "",
    clave: "",
    imagen: "",
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

  ngOnInit() {
  }

}
