import { Component } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { fromPromise } from 'rxjs/Observable/fromPromise';
// import { of } from 'rxjs/observable/of';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../profile/profile.service';
// import { Storage } from '@ionic/storage';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage('SearchPage')
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public searchresult;
  public type;
  public query;
  public result;
  public count;

  constructor(public navCtrl: NavController,public profileService: ProfileService, public navParams: NavParams) {
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.search();
    
  }
  
  search(){

    let searchresult = {type: '', query: ''} ;
    this.profileService.searchResult.subscribe(result => {
      if (result['count']) {
        this.result = result['response']; 
        this.count = result['count'].cnt;
        this.type = result['type'];
      } else {
        this.result = ''; 
        this.count = 0;
        this.type = result['type'];
      }
      
      
    });   

    console.log(this.result);

    searchresult.type = this.type;
    searchresult.query = this.query;  
      
  }
  


}
