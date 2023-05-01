import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = '../assets/ThreeRoadsPosterColor.jpg';
  image2 = '../assets/PrincessCharmingCharacters1.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}