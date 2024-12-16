import { Component, AfterViewInit } from '@angular/core';

declare var SITNA: any;

@Component({
  selector: 'app-mapa',
  standalone: true,
  template: `
    <div id="mapa" style="width: 100%; height: 600px;"></div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `]
})
export class MapaComponent implements AfterViewInit {
  private map: any;

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap() {
    this.map = new SITNA.Map("mapa", {
      controls: {
        measure: true,
        basemapSelector: true
      },
      crs: "EPSG:4326",
      initialExtent: [
        -2.84820556640625,
        41.78912492257675,
        -0.32135009765625,
        43.55789822064767
      ],
      defaultBasemap: "ORTOFOTO_ACTUAL"
    });
  }
} 