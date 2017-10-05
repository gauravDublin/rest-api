import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourites',
  template: `
  <span
      class="glyphicon"
      [class.glyphicon-star] ="isFavourite"
      [class.glyphicon-star-empty] ="!isFavourite"
      (click)="toggleStar()">
    </span>
    <input [(ngModel)]="movieTitle"/>
    {{movieTitle | titleCase}}
  `
})
export class FavouritesComponent implements OnInit {
  isFavourite: boolean;
  movieTitle: string;

  toggleStar() {
    this.isFavourite = !this.isFavourite;
  }
  constructor() { }

  ngOnInit() {
  }

}
