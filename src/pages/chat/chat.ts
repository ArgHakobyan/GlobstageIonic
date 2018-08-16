import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('ChatPage')
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  public chat:any = [];
  public profile: any = {user_id: "", user_name: "", user_lastname: "", user_photo: ""};
  public current_user_id = '';
  public chat_id;
  public msg;
  public attach_files;
  public user_photo;
  public user_name;
  constructor(public navCtrl: NavController,public profileService: ProfileService,private storage: Storage, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');    
    this.profileService.currentChatProfile.subscribe( (profile:any) => {
      console.log(profile);
      this.profile = profile;
      this.profileService.getChat(profile.user_id).subscribe( chat => {
        this.chat = chat;
        console.log(chat);  
      });
      this.storage.get('user_id').then(id => {
        this.current_user_id = id;
        console.log(id);
      });
      this.storage.get('user_photo').then(photo => {
        this.user_photo = photo;
        console.log(photo);
      });
      this.storage.get('user_name').then(name => {
        this.user_name = name;
        console.log(name);
        
      });
      
    })

    


  }

  sendMessage(){

    let message = {for_user_id: '', msg: '', attach_files: ''};
    message.for_user_id = this.profile.user_id;
    message.msg = this.msg;
    message.attach_files = this.attach_files;
      
    this.profileService.sendMessages(message).subscribe((jwt) => {});
    (<HTMLInputElement>document.getElementById("message-area")).value = '';
    
    
  }
  
  

}
