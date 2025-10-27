import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonRouterOutlet } from '@ionic/angular/standalone';
import { BottomNavBarComponent } from "../components/bottom-nav-bar/bottom-nav-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    BottomNavBarComponent,
    IonFooter,
    IonRouterOutlet],
})
export class HomePage {

  public title: string = '';

  constructor() {}

  onChildActivate(componentInstance: any) {
    this.title = componentInstance.pageTitle || 'Groove Map';
  }

}
