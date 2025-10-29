import { Component, OnInit } from '@angular/core';
import { InteractiveMapComponent } from "src/app/components/interactive-map/interactive-map.component";
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  imports: [InteractiveMapComponent, IonContent],
})
export class MapPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public pageTitle: string = 'Mapa';

}
