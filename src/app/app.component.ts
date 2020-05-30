import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boardgame-scores';

  players: any[];
  multipliers: any[];

  ngOnInit(): void {
    this.players = [];
    this.multipliers = [
      { colour: 'orange', points: 1 },
      { colour: 'blue', points: 2 },
      { colour: 'green', points: 3 },
      { colour: 'yellow', points: 4 },
      { colour: 'purple', points: 5 },
      { colour: 'dark green', points: 6 },
      { colour: 'dark purple', points: 7 },
      { colour: 'black', points: 8 },
      { colour: 'red', points: 10 }
    ];
  }

  addPlayer(name: string) {
    this.players.push({ name, score: 0 });
  }

  updateScore(i: number, diff: number) {
    this.players[i].score += diff;
  }
}
