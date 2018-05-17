import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  gameState = {
    atStartMenu: true,
    settingUpNewGame: false,
    creatingPlayers: false,
    gameStarted: false,
    lastRound: false,
    gameOver: false,
    winner: ''
  };

  players = [];

  private playersubject = new BehaviorSubject(this.players);
  private subject = new BehaviorSubject(this.gameState);

  constructor() { }

  getGameState() {
    return this.subject.asObservable();
  }

  getPlayers() {
    return this.playersubject.asObservable();
  }

  createPlayer(id) {
    let newPlayer = {
      name: '',
      id: id,
      score: 0,
      totalWin: 0,
      isLast: undefined,
      isFirst: undefined,
      hasWon: undefined
    };
    this.players = [
      ...this.players,
      newPlayer
    ];
    this.updateSubscribers();
  }

  creatingPlayers() {
    let newGameState = {
      atStartMenu: false,
      settingUpNewGame: false,
      creatingPlayers: true,
      gameStarted: false,
      lastRound: false,
      gameOver: false,
      winner: ''
    };
    this.gameState = newGameState;
    this.updateSubscribers();
  }

  updatePlayers(newPlayers) {
    let newPlayerList = newPlayers;
    for(let player of newPlayerList) {
      let foundIndex = this.players.findIndex(x => x.id === player.id);
      if (player.id === 1) {
        this.players[foundIndex].isFirst = true;
      }
      if (player.id === this.players.length) {
        this.players[foundIndex].isLast = true;
      }
      this.players[foundIndex].name = player.name;
    }
    console.log(this.players);
    this.updateSubscribers();
  }

  startNewGame() {
    let newGameState = {
      atStartMenu: false,
      settingUpNewGame: true,
      creatingPlayers: false,
      gameStarted: false,
      lastRound: false,
      gameOver: false,
      winner: ''
    };
    this.gameState = newGameState;
    this.updateSubscribers();
  }

  startGame() {
    let newGameState = {
      atStartMenu: false,
      settingUpNewGame: false,
      creatingPlayers: false,
      gameStarted: true,
      lastRound: false,
      gameOver: false,
      winner: ''
    };
    this.gameState = newGameState;
    this.updateSubscribers();
  }

  updateScore(player, score) {

    if (this.gameState.gameOver) {
      return false;
    }

    let foundIndex = this.players.findIndex(x => x.id === player.id);
    this.players[foundIndex].score += score;
    let newScore = this.players[foundIndex].score;

    if(player.isLast === true && player.score >= 3000 ){
      this.gameState.gameOver = true;
      this.calculateWinner()
    }

      if(this.gameState.lastRound === true) {

        if(player.isLast === true) {
          console.log('Game is now over!');
          this.gameState.gameOver = true;
          this.calculateWinner()
        }
        else {
          console.log('Ny poäng: ' + newScore)
        }

      }
      else if (newScore >= 3000) {
        console.log('Vinst!')
        this.gameState.lastRound = true;
      }
      else {
        console.log('Ny poäng: ' + newScore)
      }
    this.updateSubscribers();
  }

  calculateWinner() {
    // Finds the player with the highest score
    let winningScore = Math.max.apply(Math, this.players.map(function(o){return o.score}));
    let winner = this.players.findIndex(x => x.score === winningScore);

    // Set their name as the winner
    this.gameState.winner = this.players[winner].name;

    // Calculate the money they got
    this.calculateWins(this.players[winner]);

    // Set them as the winner as first player
    this.players[winner].hasWon = true;
    this.players[winner].isFirst = true;
    this.players[winner].isLast = false;

    // Set the person before them as last player
    if ( winner === 0 ) {
      let lastPlayer = this.players.length - 1;
      this.players[lastPlayer].isFirst = false;
      this.players[lastPlayer].isLast = true;

    } else {
      let lastPlayer = winner - 1;
      this.players[lastPlayer].isFirst = false;
      this.players[lastPlayer].isLast = true;
    }

  }

  calculateWins(winner) {
    for(let player of this.players) {
      if (player.id !== winner.id) {
        let difference = (winner.score - player.score) / 100;
        winner.totalWin += difference;
        player.totalWin = (player.score - winner.score) / 100 ;
      }
    }
  }

  updateSubscribers() {
    this.subject.next(this.gameState);
    this.playersubject.next(this.players);
  }

}
