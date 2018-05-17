import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";

@Component({
  selector: 'game-start-menu',
  templateUrl: './game-start-menu.component.html',
  styleUrls: ['./game-start-menu.component.css']
})
export class GameStartMenuComponent implements OnInit {

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

  startNewGame() {
    this.playersService.startNewGame();
  }
  loadGame() {
    const savedGame = JSON.parse(localStorage.getItem('savedGameState'));
    const savedPlayers = JSON.parse(localStorage.getItem('savedPlayerState'));
    this.playersService.loadGame(savedGame, savedPlayers);
  }

}
