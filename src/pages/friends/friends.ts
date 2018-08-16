import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
// import { Storage } from '@ionic/storage';



/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('FriendsPage')
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  public friends;

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService: ProfileService ) {
  }

  ionViewDidLoad() {
    this.profileService.getFriends().subscribe( (friends) =>{

      this.friends = friends;
      console.log(friends);
      
   },
  (error) =>{
    console.log(error);
    
  });
   console.log('ionViewDidLoad FriendsPage');

  }
  
}
