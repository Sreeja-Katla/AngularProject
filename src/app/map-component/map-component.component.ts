import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css'],
  providers: [DatePipe]

})
export class MapComponentComponent  implements OnInit{

public  currentDate: any;
public currentTime: any;
 public image:string="data:image/jpeg;base64,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";
 public center: { lat: number; lng: number; };
  // latitude: number;
  public latitude:number;
  public longitude:number;
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  // lat = 17.4517877;
  // lng = 78.3879073;
 public lat:number;
 public lng:number;

  constructor( private datePipe: DatePipe){

     const now = new Date();
    this.currentDate = this.datePipe.transform(now, 'shortDate');


  const time = new Date();
  this.currentTime = this.datePipe.transform(time, 'shortTime');

}


  ngOnInit(): void {


    mapboxgl as typeof mapboxgl;
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ',
      container: 'map',
      style: this.style,
      zoom: 16,
      // center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
      // Add geocoder control
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  });
//  this.map.addControl(geocoder);

  // Get current location
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
   this.map.setCenter([longitude, latitude]);
   console.log({ latitude, longitude });
   const marker = new mapboxgl.Marker()
   .setLngLat([latitude,longitude])
   .addTo(this.map);
  });


    const southWest = new mapboxgl.LngLat(this.lng, this.lat);
   const northEast = new mapboxgl.LngLat(this.lng +2, this.lat+2);
   const boundingBox = new mapboxgl.LngLatBounds(southWest, northEast);
  }



}
   // public latLng(): void {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.latitude = position.coords.latitude;
  //     this.longitude = position.coords.longitude;
  //     console.log(this.latitude);
  //     console.log(this.longitude);
  //     this.center = { lat: this.latitude, lng: this.longitude }; // Set actual values for lat and lng
  //     console.log(this.center);

  //   });
  // }

