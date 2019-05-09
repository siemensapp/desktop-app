import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-frame',
  templateUrl: './content-frame.component.html',
  styleUrls: ['./content-frame.component.css']
})
export class ContentFrameComponent implements OnInit {

  mapCenter = [-74, 4.2];
  basemapType = 'topo';
  mapZoomLevel = 6;

  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }

  constructor() { }

  ngOnInit() {
  }

}
