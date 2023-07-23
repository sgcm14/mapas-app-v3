import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 

if (environment.production) {
  enableProdMode();
}

mapboxgl.accessToken = 'pk.eyJ1Ijoic2djbTE0IiwiYSI6ImNsZ2lwM3N4ZjB4c2YzZXBudHNiZ2Z5ODQifQ.82ss1QHHeuV9Rvr54e6wFg';

if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
