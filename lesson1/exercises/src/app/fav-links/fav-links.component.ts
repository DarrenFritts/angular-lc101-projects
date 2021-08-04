import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  links = ['http://www.launchcode.com', 'https://www.w3schools.com'];
  constructor() { }

  ngOnInit() {
  }

}
