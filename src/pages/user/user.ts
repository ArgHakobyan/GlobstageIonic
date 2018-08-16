import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';


@IonicPage('UserPage')
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public menuTab = false;

  public toggleFlag1:boolean = true;
  public toggleFlag2:boolean = false;
  public toggleFlag3:boolean = false;
  public toggleFlag4:boolean = false;
  public toggleFlag5:boolean = false;
  public detailsToggle:boolean = false;
  public albumTab:boolean = false;
  public addVideo:boolean = false;
  public id:Number;

  constructor(
    public navCtrl: NavController,
    public profileService: ProfileService,
    public zone: NgZone,
    public navParams: NavParams) {
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

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.loadMap();
  }
  openBtn(){
    this.menuTab = (this.menuTab === true)? false : true;
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
    

}
