import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService  ) { }

  buscar(termino: string) {
    //console.log(this.termino);
    this.termino = termino;
    this.hayError = false;
    this.PaisService.buscarCapital(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(paises);
        console.log(paises[0].capital);
      },
      error: (e) => {
        console.log(e);
        this.hayError = true;
      }
    });
  }
}
