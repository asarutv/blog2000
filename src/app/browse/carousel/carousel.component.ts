import { PhotosService } from './../../services/photos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
////import { Photo } from 'src/app/models/photo.model';
//import { User } from 'src/app/models/user';
import { map } from 'rxjs/operators';
import { Asaru } from '../../models/asaru';
import { SwiperOptions } from 'swiper';
import { User } from '../../models/user';
import { Photo } from '../../models/photo.model';
import { SwiperComponent } from 'ngx-useful-swiper';

declare const myTest: any;
declare const init: any;

declare const controls: any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
users : User[];
photos: Photo[]
movies: any[]
isura: Asaru[]

config: SwiperOptions = {
  pagination: { el: '.swiper-pagination', clickable: true },
  autoHeight: false,
  allowTouchMove: false,
  spaceBetween: 1,
  on: {
    slideChange: () => {
      console.log('slideChange Event: Active Slide Index = ', this.usefulSwiper.swiper.activeIndex);

    },
    slideChangeTransitionEnd: () => {
      console.log('slideChange Event');
    }
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  breakpoints: {
    1024: {
      slidesPerView: 6
    },
    500: {
      slidesPerView: 5
    },
    400: {
      slidesPerView: 4
    },
    300: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true,

};

  constructor(private dataService: PhotosService) { }
  @ViewChild('usefulSwiper', { static: false }) usefulSwiper: SwiperComponent;

  ngOnInit() {
    this.dataService.getMovies()
    .pipe(map((data) => this.isura = data.results))
    .subscribe((resp: Asaru[]) => {
      this.isura = resp
      console.log(this.isura)
    }
)
    //.pipe(map((movies: any[]) => this.movies = movies))
    // console.log(this.movies)

    // this.dataService.getUsers()
    // .pipe(map((users: User[]) => users))

    // //.pipe(map((users: User[]) => users.map(user => new User(user))))
    // .subscribe((resp: User[]) => {
    //    this.users = resp
    //    console.log(resp);
    //  });

    //  /////////////////////////////////////////////////////////////////
    //  this.dataService.getPhotos()
    //  .pipe(map((photos: Photo[]) => photos))

    //  //.pipe(map((users: User[]) => users.map(user => new User(user))))
    //  .subscribe((resp: Photo[]) => {
    //     this.photos = resp

    //     console.log(resp);
    //   });
  }

  onClick() {
    myTest();
  }
  nextSlide() {
    this.usefulSwiper.swiper.slideNext();
  }

  previousSlide() {
    this.usefulSwiper.swiper.slidePrev();
  }

  slideToThis(index) {
    this.usefulSwiper.swiper.slideTo(index);
  }

}
