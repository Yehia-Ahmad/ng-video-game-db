import { ApiService } from 'src/app/Services/api.service';
import { Game } from 'src/app/models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent {
  @Input() game: Game;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getGameScreenshots();
  }

  getGameScreenshots() {
    this.api.getGameScreenshots().subscribe((data: any) => {
      console.log(data);
    });
  }
}
