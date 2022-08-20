import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.page.html',
  styleUrls: ['./pantalla-principal.page.scss'],
})
export class PantallaPrincipalPage implements OnInit {


  u: string = '';
  c: string = '';

  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.activedRouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.u = this.router.getCurrentNavigation().extras.state.usu;
        this.c = this.router.getCurrentNavigation().extras.state.contra;
      }
    });
  }

  pasarDatos() {
    let navigationExtras: NavigationExtras = {
      state: {
        usu: this.u
      }
    }

    this.router.navigate(['/perfil'], navigationExtras);
  }

  ngOnInit() {
  }

}
