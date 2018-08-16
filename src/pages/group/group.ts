import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  public groupTab:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
    this.loadMap();
  }
  
  createGroup(){
    this.groupTab = true;
  }
  cancelGroup(){
    this.groupTab = false;
  }
  loadMap(){
    let latLng = new google.maps.LatLng(40.177200, 44.503490);

    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // console.log(this.storage.get('X-Jwt-Auth'));
  

  }
//   loadMap(){
//     let styledMapType = new google.maps.StyledMapType(
//       [
//         {
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#1d2c4d"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#8ec3b9"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#1a3646"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.country",
//           "elementType": "geometry.stroke",
//           "stylers": [
//             {
//               "color": "#4b6878"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.land_parcel",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#64779e"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.province",
//           "elementType": "geometry.stroke",
//           "stylers": [
//             {
//               "color": "#4b6878"
//             }
//           ]
//         },
//         {
//           "featureType": "landscape.man_made",
//           "elementType": "geometry.stroke",
//           "stylers": [
//             {
//               "color": "#334e87"
//             }
//           ]
//         },
//         {
//           "featureType": "landscape.natural",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#023e58"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#283d6a"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#6f9ba5"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#1d2c4d"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "geometry.fill",
//           "stylers": [
//             {
//               "color": "#023e58"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#3C7680"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#304a7d"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#98a5be"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#1d2c4d"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#2c6675"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "geometry.stroke",
//           "stylers": [
//             {
//               "color": "#255763"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#b0d5ce"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#023e58"
//             }
//           ]
//         },
//         {
//           "featureType": "transit",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#98a5be"
//             }
//           ]
//         },
//         {
//           "featureType": "transit",
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#1d2c4d"
//             }
//           ]
//         },
//         {
//           "featureType": "transit.line",
//           "elementType": "geometry.fill",
//           "stylers": [
//             {
//               "color": "#283d6a"
//             }
//           ]
//         },
//         {
//           "featureType": "transit.station",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#3a4762"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#0e1626"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#4e6d70"
//             }
//           ]
//         }
//       ],
//       {name: 'Styled Map'});
//     let latLng = new google.maps.LatLng(40.179186, 44.499103);
//     this.map = new google.maps.Map(document.getElementById('map1'), {
//     center: latLng,
//     zoom: 10,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     mapTypeControlOptions: {
//       mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
//     }
//   });


//   this.map.mapTypes.set('styled_map', styledMapType);
//   this.map.setMapTypeId('styled_map');
// }


}

