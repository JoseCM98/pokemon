import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  urlImage:string=""
  name:string=""
  nom:string=""
  altura:any
  peso:any
  posicion:string=""
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons()
  }
  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      this.urlImage=data.sprites.front_default,
      this.nom=data.name,
      this.posicion=data.id,
      this.altura=(data.height*0.1).toFixed(2)+"m",
      this.peso=(data.weight*0.1).toFixed(1)+"kg",
      console.log(data)});
  }

  getPokemons(){
    let pokemonData;

    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        (res:any) => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name


          };
          this.data.push(pokemonData);

          console.log(res)
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
