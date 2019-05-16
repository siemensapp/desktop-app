import { Component, OnInit } from '@angular/core';
import { DataRetrieverService} from '../data-retriever.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  constructor(private DataR: DataRetrieverService) { }
  nombres = new Subject();
  ngOnInit() {
    this.DataR.getData("https://pokeapi.co/api/v2/pokemon/?limit=100").then(result => {
      this.nombres.next(result["results"]);
    });
  }

  filtrarCliente(nombre: String){
    console.log(nombre);
  }

  filtrarPlanta(nombre: String){

  }

}
