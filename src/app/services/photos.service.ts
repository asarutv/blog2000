import { Photo } from './../models/photo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

 

  getPhotos(): Observable<Photo[]>{ 
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos');
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    //.pipe(map((users: User[]) => users.map(user => new User(user))));
    // .pipe(map((users: User[]) => users));
  }
  getMovies(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/4/list/20?api_key=ca17e9eb0e42b7d73a618f95b733a0df')
    //.pipe(map((users: User[]) => users.map(user => new User(user))));
    //.pipe(map((movies: any[]) => movies));
  }

}
