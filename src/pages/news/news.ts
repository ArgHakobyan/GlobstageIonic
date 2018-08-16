import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
// import { Storage } from '@ionic/storage';



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('NewsPage')
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public commentTab = false;
  public news;

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileService: ProfileService ) {
  }

  ionViewDidLoad() {
    this.profileService.getNews().subscribe( (news) =>{

      this.news = news;
      console.log(news);
      
   },
  (error) =>{
    console.log(error);
    
  });
   console.log('ionViewDidLoad NewsPage');

  }


  addComment(){
    this.commentTab = true;
  }
  

}
