import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
// import { Storage } from '@ionic/storage';


/**
 * Generated class for the PrivacyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('PrivacyPage')
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {

  public types1 = 'all';
  public types2 = 'all';
  public types3 = 'all';
  public types4 = 'all';
  public types5 = 'all';
  public types6 = 'all';


  constructor(public navCtrl: NavController,public profileService: ProfileService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }

}
