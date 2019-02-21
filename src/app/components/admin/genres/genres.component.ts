import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.less']
})
export class GenresComponent implements OnInit {

  private title = 'Genres';

  constructor() { }

  ngOnInit() {
  }

}
