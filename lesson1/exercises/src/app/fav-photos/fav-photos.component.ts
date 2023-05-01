import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Pics';
  image1 = '../assets/ThreeRoadsPosterColor.jpg';
  image2 = '../assets/PrincessCharmingCharacters1.jpg';
  image3 = 'https://media3.giphy.com/media/Dh5q0sShxgp13DwrvG/giphy.gif?cid=ecf05e476j8zcygzcl0uhabitloiwlcvg5h4n0jm9yrsgd4b&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  constructor() { }

  ngOnInit() {
  }

}