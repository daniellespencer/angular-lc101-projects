import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.buzzfeed.com/', 'https://www.itv.com/loveisland', 'https://giphy.com/gifs/5ZdbOnFiWt8Uo/html5']

  constructor() { }

  ngOnInit() {
  }

}
