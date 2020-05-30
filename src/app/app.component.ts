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
    this.players = JSON.parse(localStorage.getItem('players')) || [];
    this.multipliers = [
      { colour: 'none', points: 1 },
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
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  removePlayer(i: number) {
    if (window.confirm("Are you sure you want to delete this player?")) {
      this.players = this.players.filter((player, index) => i !== index);
      localStorage.setItem('players', JSON.stringify(this.players));
    }
  }

  updateScore(i: number, diff: number) {
    this.players[i].score += diff;
    localStorage.setItem('players', JSON.stringify(this.players));
  }
}
