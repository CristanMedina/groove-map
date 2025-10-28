import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mapOutline, map,
  sparklesOutline, sparkles,
  personOutline, person
} from 'ionicons/icons';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonIcon]
})
export class BottomNavBarComponent  implements OnInit {

  constructor() {
    addIcons({
      mapOutline,
      map,
      sparklesOutline,
      sparkles,
      personOutline,
      person
    });
  }

  ngOnInit() {}

}
