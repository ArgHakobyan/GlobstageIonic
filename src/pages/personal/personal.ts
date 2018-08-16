import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';



/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('PersonalPage')
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  public personal = {user_xfields_all: ""};
  public activity: String = '';
  public interests: String = '';
  public games: String = '';
  public music: String = '';
  public books: String = '';
  public kino: String = '';
  public quote: String = '';
  public myinfo: String = '';
  constructor(public navCtrl: NavController,public profileService: ProfileService, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.profileService.getProfileDetails().subscribe( (personal:any) =>{
      
      this.personal = personal;
      console.log(this.personal);
      this.activity = personal.user_xfields_all.split('||')[0].split('|')[1];
      this.interests = personal.user_xfields_all.split('||')[1].split('|')[1];
      this.games = personal.user_xfields_all.split('||')[6].split('|')[1];
      this.music = personal.user_xfields_all.split('||')[3].split('|')[1];
      this.books = personal.user_xfields_all.split('||')[5].split('|')[1];
      this.kino = personal.user_xfields_all.split('||')[4].split('|')[1];
      this.quote = personal.user_xfields_all.split('||')[7].split('|')[1];
      this.myinfo = personal.user_xfields_all.split('||')[2].split('|')[1];
      
        
   },
  (error) =>{
    console.log(error);
    
  });
   console.log('ionViewDidLoad PersonalPage');
 }
 

 saveInterests(){
  let user: any = {activity: '', interests: '',games: '',music: '',books: '',kino: '',quote: '',myinfo: ''};
  user.activity = this.activity;
  user.interests = this.interests;
  user.games = this.games;
  user.music = this.music;
  user.books = this.books;
  user.kino = this.kino;
  user.quote = this.quote;
  user.myinfo = this.myinfo;

  this.profileService.saveInterests(user).subscribe((jwt) => {
    
  });
}


}
