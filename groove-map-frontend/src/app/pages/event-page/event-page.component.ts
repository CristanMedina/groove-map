import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
  imports: [RouterOutlet],
})
export class EventPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  public pageTitle: string = 'Eventos';

}
