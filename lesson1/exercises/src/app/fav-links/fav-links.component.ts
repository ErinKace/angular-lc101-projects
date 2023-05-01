import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks:string[] = ['http://www.ladyknightillustrations.com/','https://critters.org/', 'https://media3.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif?cid=ecf05e476j8zcygzcl0uhabitloiwlcvg5h4n0jm9yrsgd4b&ep=v1_gifs_search&rid=giphy.gif&ct=g'];

  constructor() { }

  ngOnInit() {
  }

}
