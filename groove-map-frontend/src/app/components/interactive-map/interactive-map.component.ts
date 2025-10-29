import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss'],
  imports: [IonContent],
})
export class InteractiveMapComponent implements AfterViewInit {

  private map!: L.Map;

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      console.warn("No se encontró el contenedor #map");
      return;
    }

    this.map = L.map(mapContainer).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }
}
