import { PhotosService } from './../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photos: any;

  constructor(private dataService: PhotosService) { }

  ngOnInit() {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    this.dataService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
      }
      );
    
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }

}
