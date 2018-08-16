import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { InformationPage } from '../pages/information/information';
import { ContactPage } from '../pages/contact/contact';
import { PersonalPage } from '../pages/personal/personal';
import { SettingsPage } from '../pages/settings/settings';
import { MessagesPage } from '../pages/messages/messages';  
import { ChatPage } from '../pages/chat/chat';
import { FriendsPage } from '../pages/friends/friends';
import { NewsPage } from '../pages/news/news';
import { SearchPage } from '../pages/search/search';
import { UserPage } from '../pages/user/user';
import { PrivacyPage } from '../pages/privacy/privacy';
import { NotesPage } from '../pages/notes/notes';
import { GroupPage } from '../pages/group/group';
import { PinsPage } from '../pages/pins/pins';
import { Storage } from '@ionic/storage';
import { ProfileService } from '../pages/profile/profile.service';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  
  pages: Array<{title: string, component: any}>;
  
  public searchTab:boolean = false;
  public searchresult;
  public query;
  public profile;
  public user_rating;
  public type = '1';
  public type1 = 'en';
  public menuProfile;
  public languageTab:boolean = false;
  
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    public profileService: ProfileService,

  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Information', component: InformationPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Personal', component: PersonalPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Messages', component: MessagesPage },
      { title: 'Chat', component: ChatPage },
      { title: 'Friends', component: FriendsPage },
      { title: 'News', component: NewsPage },
      { title: 'Search', component: SearchPage },
      { title: 'User', component: UserPage },
      { title: 'Privacy', component: PrivacyPage },
      { title: 'Notes', component: NotesPage },
      { title: 'Group', component: GroupPage },
      { title: 'Pins', component: PinsPage },
    ];
  }

  ionViewDidLoad() {
    this.profileService.getProfileDetails().subscribe( (profile) =>{
 
        this.profile = profile;
           
     });
           
   }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.profileService.getProfileDetails().subscribe( (profile) =>{
 
        this.menuProfile= profile;
           
     });
      console.log('ionViewDidLoad ProfilePage');
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  ionViewInformation(){
    this.nav.push('InformationPage');
  }
  ionViewPrivacy(){
    this.nav.push('PrivacyPage');
  }
  ionViewContact(){
    this.nav.push('ContactPage');
  }
  ionViewPersonal(){
    this.nav.push('PersonalPage');
  }
  ionViewSettings(){
    this.nav.push('SettingsPage');
  }
  logout(){
    this.storage.remove('current_user').then(()=>{
      this.nav.push('LoginPage');
      this.menuProfile = null;
    });
  }
  ionViewMessages(){
    this.nav.push('MessagesPage');
  }
  
  ionProfilePage(){
    this.nav.push('ProfilePage');
  }
  ionViewFriends(){
    this.nav.push('FriendsPage');
  }
  ionViewSearch(){
    this.searchTab = (this.searchTab === true)? false : true;
  }
  ionViewNews(){
    this.nav.push('NewsPage');
  }
  ionViewLanguage(){
    this.languageTab = (this.languageTab === true)? false : true;
  }
  ionViewNotes(){
    this.nav.push('NotesPage');
  }
  ionViewGroups(){
    this.nav.push('GroupPage');
  }
  ionViewPins(){
    this.nav.push('PinsPage');
  }
  search(){
    let searchresult = {type: '', query: ''};
    searchresult.type = this.type;
    searchresult.query = this.query;       

    this.profileService.getSearch(searchresult).subscribe( (searchresult) =>{
      this.searchresult = searchresult;
      this.profileService.setsearchData(searchresult);
      this.nav.push('SearchPage');
   },   
  (error) =>{
    console.log(error);
    
  });
  }
 
  
  
  
}
