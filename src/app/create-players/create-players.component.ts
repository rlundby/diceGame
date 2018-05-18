import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayersService} from '../players.service';

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
  this.playersService.startGame();
}

constructor(private playersService: PlayersService) {}

  ngOnInit() {
  }

}
