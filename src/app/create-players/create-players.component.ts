import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayersService} from "../players.service";

@Component({
  selector: 'create-players',
  templateUrl: './create-players.component.html',
  styleUrls: ['./create-players.component.css']
})
export class CreatePlayersComponent implements OnInit {
  @Input() players;


updatePlayers() {
  this.playersService.updatePlayers(this.players);
  this.startGame();
}

startGame() {
  this.playersService.startGame()
}

  // submit(names) {
  //   //console.log(names);
  //   for(let name in names) {
  //     this.playerList.push({
  //       id: name,
  //       name: names[name],
  //       score: 0,
  //       totalWin: 0,
  //     })
  //   }
  // }
  constructor(private playersService: PlayersService) {}
  ngOnInit() {
  }

}
