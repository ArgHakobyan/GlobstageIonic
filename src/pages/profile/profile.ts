import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component,ViewChild, ElementRef, NgZone } from '@angular/core';
import { ProfileService, Profile } from './profile.service';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';

// import { FileChooser } from '@ionic-native/file-chooser';

declare var google;
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('ProfilePage')
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat: any;
  lng: any;
  x: number = 0;
  y: number = 0;

  public selectorHidden = true;
  
  public toggleFlag1:boolean = true;
  public toggleFlag2:boolean = false;
  public toggleFlag3:boolean = false;
  public toggleFlag4:boolean = false;
  public toggleFlag5:boolean = false;
  public detailsToggle:boolean = false;
  public albumTab:boolean = false;
  public addVideo:boolean = false;
  public profile:Profile = {user_name: '', user_email: ''};
  public messages;
  public personal;
  public chat;
  public id:Number;
  public logout;
  public marker;


  constructor(
    public navCtrl: NavController,
    private fileChooser: FileChooser,
    private fileOpener: FileOpener,
    private filePath: FilePath,
    public navParams: NavParams, 
    public zone: NgZone,
    private storage: Storage,
    public profileService: ProfileService,
    public geolocation: Geolocation) {
  }

  chooseFile(){

    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath =>{
        this.fileOpener.open(resolvedFilePath, 'application/pdf').then(value =>{
          alert('It Worked')
        }).catch(err=>{
          alert(JSON.stringify(err));
        });
      })
    })
    
  }

  onToggle1() {
    this.toggleFlag1 = true;
    this.toggleFlag2 = false;
    this.toggleFlag3 = false;
    this.toggleFlag4 = false;
    this.toggleFlag5 = false;
    this.loadMap();
  }
  onToggle2() {
    this.toggleFlag1 = false;
    this.toggleFlag2 = true;
    this.toggleFlag3 = false;
    this.toggleFlag4 = false;
    this.toggleFlag5 = false;
  }
  onToggle3() {
    this.toggleFlag1 = false;
    this.toggleFlag2 = false;
    this.toggleFlag3 = true;
    this.toggleFlag4 = false;
    this.toggleFlag5 = false;
  }
  onToggle4() {
    this.toggleFlag1 = false;
    this.toggleFlag2 = false;
    this.toggleFlag3 = false;
    this.toggleFlag4 = true;
    this.toggleFlag5 = false;
  }
  onToggle5() {
    this.toggleFlag1 = false;
    this.toggleFlag2 = false;
    this.toggleFlag3 = false;
    this.toggleFlag4 = false;
    this.toggleFlag5 = true;
  }
  show1Toggle() {
	  this.detailsToggle = (this.detailsToggle === true)? false : true;
  }
  onToggle(id: Number) {
    this.id = id;
  }
  createAlbum(){
    this.albumTab = true;
  }
  cancelAlbum(){
    this.albumTab = false;
  }
  createVideo(){
    this.addVideo = true;
  }
  cancelVideo(){
    this.addVideo = false;
  }
  ionViewDidLoad() {
     this.loadMap();
     // this.loadPageScripts();
    this.profileService.getProfileDetails().subscribe( (profile:any) =>{
        this.profile = profile;
        this.storage.set('user_photo', profile.user_photo);
        this.storage.set('user_name', profile.user_name);
       },
    (error) =>{
      console.log(error);
     });
     console.log('ionViewDidLoad ProfilePage');
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then( pos => {

    let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    let mapOptions = {
       center: latLng,
       zoom: 16,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }

     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     this.addMarker();
    }, (err) => {
      console.log(err);
    }); 
  }
   addMarker(){
    let marker;
    this.geolocation.watchPosition().subscribe((pos) => {
      this.x = pos.coords.latitude;
      this.y = pos.coords.longitude;
     let latLng = new google.maps.LatLng(this.x, this.y);
      if (marker && marker.setMap) {
        marker.setMap(null);
      }
      marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: latLng,
     });
     let content = "<h6>Info</h6>";
     this.addInfoWindow(marker, content);
    });
   }
     addInfoWindow(marker, content){
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        })
   }
  showSelector(){
    this.selectorHidden = !this.selectorHidden;
  }
}

