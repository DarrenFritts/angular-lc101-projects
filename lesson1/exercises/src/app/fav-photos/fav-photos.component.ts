import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos to Remember';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://pbs.twimg.com/profile_images/1295809711393177606/zJcb95MI.jpg';
  image3 = 'https://www.stlmosaicproject.org/cmss_files/attachmentlibrary/launchcode-logo-facebook1-e397a364ce733d0dee2bca438c6c1cf45d4ba9200a28c7b0b0da0e436f0ae44f_2.jpg';

  constructor() { }

  ngOnInit() {
  }

}