import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  urlImage:string=""
  name:string=""
  nom:string=""
  altura:any
  peso:any
  posicion:string=""
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  constructor(private pokemonService: PokemonService) {}
  //Mensaje de prueba

  ngOnInit(): void {
  }
  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      this.urlImage=data.sprites.front_default,
      this.nom="Nombre:" +data.name,
      this.posicion=data.id,
      this.altura="Altura:"+(data.height*0.1).toFixed(2)+"m",
      this.peso="Peso:"+(data.weight*0.1).toFixed(1)+"kg",
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
