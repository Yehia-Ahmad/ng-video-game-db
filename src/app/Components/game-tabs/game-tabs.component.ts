import { ApiService } from 'src/app/Services/api.service';
import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models';
import * as GameInfo from '../../../../db.json';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent {
  @Input() game: Game;
  Screenshots: any[];
  Trailer: any[];
  GameInfo: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getGameInfo();
  }

  getGameInfo() {
    this.GameInfo = GameInfo;
    this.Trailer = this.GameInfo.Trailer;
    this.Screenshots = this.GameInfo.Screenshots;
    // this.api.getGameScreenshots().subscribe((data: any) => {
    //   console.log(data);
    // });
  }
}
