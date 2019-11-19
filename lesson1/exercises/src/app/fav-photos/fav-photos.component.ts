import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaWAsaQvxcNyx22XoiP7OirQZv4-NMDc_76H5mIt489_6nYY-Vg&s';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT2XK4W0i7icS84Yq5VHpwZ9anmDXoOFQZX0anUhWxcpL5du_&s';

  constructor() { }

  ngOnInit() {
  }

}