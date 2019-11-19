import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../servicios/servicioGaleria/galeria.service';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  photos;
  
  constructor(protected galeriaService: GaleriaService ) { }

  ngOnInit() {
    this.galeriaService.getPhotos()
    .subscribe(
      (data) => {
        console.log(data);
        this.photos = data;
      }
    )
  }
}
