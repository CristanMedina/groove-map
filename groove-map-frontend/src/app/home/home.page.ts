import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BottomNavBarComponent } from "../components/bottom-nav-bar/bottom-nav-bar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, BottomNavBarComponent, RouterOutlet],
})
export class HomePage {
  constructor() {}
}
