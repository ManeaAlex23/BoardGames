import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import {GameModel} from '../models/games';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
   games: Array<GameModel>
  constructor(private gameService:GamesService) {}


  ngOnInit(){
    this.GetAllGames();
  }

  GetAllGames(){
    let result = this.gameService.DisplayGamesForClient().subscribe(res =>{
      this.games = res;
      console.log(this.games);
    });

  }

  IncreaseNumberOfLikes(){
    console.log("Am primit like pentru");

  }

  IncreaseNumberOfDisLikes(){
    console.log("Am primit dislike");

  }
}
