import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path: 'casa', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'pokemon', component:PokemonComponent},
  {path: '**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
