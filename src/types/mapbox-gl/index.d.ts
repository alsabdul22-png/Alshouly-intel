declare namespace mapboxgl {
  export class Map {
    constructor(options?: any);
    on(type: string, listener: (...args: any[]) => void): this;
    remove(): void;
    flyTo(options: any): void;
    setStyle(style: string | object): void;
    addControl(control: any): void;
    project(lngLat: any): any;
    addSource(id: string, source: any): void;
    getSource(id: string): any;
    addLayer(layer: any, before?: string): void;
    removeLayer(id: string): void;
    getLayer(id: string): any;
    zoomIn(): void;
    zoomOut(): void;
  }

  export class Marker {
    constructor(options?: any);
    setLngLat(lngLat: any): this;
    addTo(map: Map): this;
    remove(): void;
  }

  export class Popup {
    constructor(options?: any);
    setLngLat(lngLat: any): this;
    setHTML(html: string): this;
    addTo(map: Map): this;
    remove(): void;
  }

  export interface LngLatLike {}
  export let accessToken: string;
}

declare module 'mapbox-gl' {
  export = mapboxgl;
}
