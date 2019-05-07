import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-frame',
  templateUrl: './content-frame.component.html',
  styleUrls: ['./content-frame.component.css']
})
export class ContentFrameComponent implements OnInit {

  mapCenter = [-74.183888, 4.777068];
  basemapType = 'topo';
  mapZoomLevel = 16;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }

  constructor() { }

  ngOnInit() {
  }

}
