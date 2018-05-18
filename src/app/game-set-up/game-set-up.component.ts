import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'game-set-up',
  templateUrl: './game-set-up.component.html',
  styleUrls: ['./game-set-up.component.css']
})
export class GameSetUpComponent implements OnInit {

  subscription: Subscription;
  boardSubscription: Subscription;

  players = [];
  gameState = {};

  createPlayers(number) {
    if (!number ) {
      return false;
    }
    const numberOfPlayers = Number(number);
    for (let i = 0; i < numberOfPlayers; i++) {
      this.playersService.createPlayer(i + 1);
    }
    this.playersService.creatingPlayers();
  }
  constructor(private playersService: PlayersService) { }


  ngOnInit() {
    this.subscription = this.playersService.getPlayers()
      .subscribe( players => {
        this.players = players;
      });
    this.boardSubscription = this.playersService.getGameState()
      .subscribe( gameState => {
        this.gameState = gameState;
      });
  }

}
