import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';

declare const myTest: any;
declare const init: any;

declare const controls: any;

@Component({
  selector: 'app-mixslider',
  templateUrl: './mixslider.component.html',
  styleUrls: ['./mixslider.component.scss']
})
export class MixsliderComponent implements OnInit {

  photosList: Photo[];
  photos: Photo[]
  data: any 
  iter: number[];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos().subscribe(
      (data) => {
        this.handleResponse(data);
      },
      (error) => {console.log(error);}
    );
  }
  handleResponse(data: any) {
    this.photos = data.photos;
    console.log(this.photos);
  }
  
  onClick() {
    myTest();
  }

}
