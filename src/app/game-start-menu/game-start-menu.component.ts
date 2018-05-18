import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";

@Component({
  selector: 'game-start-menu',
  templateUrl: './game-start-menu.component.html',
  styleUrls: ['./game-start-menu.component.css']
})
export class GameStartMenuComponent implements OnInit {

  noSaveFile;
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    const savedGame = JSON.parse(localStorage.getItem('savedGameState'));
    const savedPlayers = JSON.parse(localStorage.getItem('savedPlayerState'));
    if (!savedGame || !savedPlayers ) {
      this.noSaveFile = true;
    } else {
      this.noSaveFile = false;
    }
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
