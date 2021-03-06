import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {PlayersService} from '../players.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'game-in-progress',
  templateUrl: './game-in-progress.component.html',
  styleUrls: ['./game-in-progress.component.css']
})
export class GameInProgressComponent implements OnInit {

  subscription: Subscription;
  stateSubscription: Subscription;

  players = [];
  errorMsg = '';

  gameState = {
    atStartMenu: true,
    settingUpNewGame: false,
    creatingPlayers: false,
    gameStarted: false,
    lastRound: false,
    gameOver: false,
    winner: ''
  };

 currentPlayer;
  constructor(private playersService: PlayersService, private renderer: Renderer2, private el: ElementRef) { }



  ngOnInit() {
    this.subscription = this.playersService.getPlayers()
      .subscribe( players => {
        this.players = players;
      });
    this.stateSubscription = this.playersService.getGameState()
      .subscribe(gameState => {
        this.gameState = gameState;
      });

    this.currentPlayer = this.players.find(x => x.isFirst === true);
  }

  newScores(player, newScore) {
    this.errorMsg = '';
    if (newScore < 349 && newScore > 0) {
      this.errorMsg = 'Oj! Du vet väl att du måste få minst 350 poäng?';
      return false;
    }
    const score = Number(newScore);
    this.playersService.updateScore(player, score);
  }

  getNextPlayer(newScore) {
    if (newScore < 349 && newScore > 0) {
      return false;
    }
    if ( this.gameState.gameOver === true) {
      const nextPlayer = this.players.find( x => x.isFirst === true);
      this.currentPlayer = nextPlayer;
    } else {
      const playingRightNow = this.players.findIndex(x => x ===  this.currentPlayer);
      if (playingRightNow === this.players.length - 1) {
        this.currentPlayer = this.players[0];
      } else {
        const nextPlayer = playingRightNow + 1;
        this.currentPlayer = this.players[nextPlayer];
      }
    }
    this.renderer.selectRootElement('#scorefield' + this.currentPlayer.id).focus();
  }

  nextRound() {
    this.getNextPlayer(350);
    for (let player of this.players) {
      player.score = 0;
    }
    this.playersService.startGame();
  }
  saveGameState() {
    localStorage.setItem('savedGameState', JSON.stringify(this.gameState));
    localStorage.setItem('savedPlayerState', JSON.stringify(this.players));
  }

  getGameState() {
    console.log(this.gameState);
  }
  getPlayerState() {
    console.log(this.players);
  }
}
