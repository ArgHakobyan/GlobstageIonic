import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
import { Nav } from 'ionic-angular';



/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('MessagesPage')
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  @ViewChild(Nav) nav: Nav;

  public messages;

  constructor(public navCtrl: NavController, public profileService: ProfileService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.profileService.getMessages().subscribe( (messages) =>{

      this.messages = messages;
      console.log(messages);
      
   },
   
  (error) =>{
    console.log(error);
    
  });
   console.log('ionViewDidLoad MessagesPage');
 }

 ionViewChat(person){
  this.profileService.setChatProfile(person);
  this.navCtrl.push('ChatPage');
  
}
  

}



