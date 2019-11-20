import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBUiOdiHY3QAFjDqnkNwsBNGsfkAa10XgwHOvaiR36nztiJ99pA&s';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxLGIlaO1FNrBGcbwMy-wrlRZcQ9QHCen718O4bKwrSpOtYGaWw&s';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOcI5cyWIy8kG6X8h5kvyxmxlTYIMW_g5UWn7439cETHYebUQFQ&s';

  constructor() { }

  ngOnInit() {
  }

}