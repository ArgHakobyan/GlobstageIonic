import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';


/**
 * Generated class for the PinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pins',
  templateUrl: 'pins.html',
})
export class PinsPage {

  public pins;
  public type2 = '1';
  public addPins:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService: ProfileService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinsPage');
  }
  myStickers(){
    this.profileService.getPins().subscribe( (pins) =>{

      this.pins = pins;
      console.log(pins);
      
   },
  (error) =>{
    console.log(error);
    
  });
  }
  addStickers(){
    this.addPins = true;
  }
  cancelStickers(){
    this.addPins = false;
  }



}
