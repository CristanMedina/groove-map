import { Component, OnInit } from '@angular/core';
import { InteractiveMapComponent } from "src/app/components/interactive-map/interactive-map.component";

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  imports: [InteractiveMapComponent],
})
export class MapPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
