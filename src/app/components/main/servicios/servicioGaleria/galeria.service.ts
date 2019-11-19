import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(protected http: HttpClient) { }

  getPhotos()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

}

