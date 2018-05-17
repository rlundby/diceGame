import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  gameState = {
    atStartMenu: true,
    settingUpNewGame: false,
    creatingPlayers: false,
    gameStarted: false,
    lastRound: false,
    gameOver: false,
    winner: ''
  };
  subscription: Subscription;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.subscription = this.playersService.getGameState()
      .subscribe( gameState => {
        this.gameState = gameState;
      });
  }

  currentGameState() {
    console.log(this.gameState);
  }

}
