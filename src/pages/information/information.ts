import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('InformationPage')
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  public profile: any = {user_name: '', user_email: ''};


  constructor(public navCtrl: NavController,public profileService: ProfileService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');

    this.profileService.editMyPageMain().subscribe( (profile) =>{

      this.profile = profile;
      console.log(profile);
      
   },
  (error) =>{
    console.log(error);
    
  });
  }

}
