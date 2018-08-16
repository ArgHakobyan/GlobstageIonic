import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';



/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('ContactPage')
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public profile: any = {user_name: '', user_email: ''};
  

  constructor(public navCtrl: NavController,public profileService: ProfileService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');

    this.profileService.getProfileDetails().subscribe( (profile) =>{

      this.profile = profile;
      console.log(profile);

     
   },
  (error) =>{
    console.log(error);
    
  });
 
  }

}
