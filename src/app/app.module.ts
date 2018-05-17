import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameSetUpComponent } from './game-set-up/game-set-up.component';
import { CreatePlayersComponent } from './create-players/create-players.component';
import {FormsModule} from "@angular/forms";
import { GameStartMenuComponent } from './game-start-menu/game-start-menu.component';
import { GameInProgressComponent } from './game-in-progress/game-in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    GameSetUpComponent,
    CreatePlayersComponent,
    GameStartMenuComponent,
    GameInProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
