import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boardgame-scores';

  points: {
    'orange': 1,
    'blue': 2,
    'green': 3,
    'yellow': 4,
    'purple': 5,
    'dark green': 6,
    'dark purple': 7,
    'black': 8,
    'red': 10
  };
  players: any[];

  ngOnInit(): void {
    this.players = [];
  }

  addPlayer(name: string) {
    this.players.push(name);
  }
}
