import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { LoginPageModule } from '../pages/login/login.module';
import { InformationPageModule } from '../pages/information/information.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { PersonalPageModule } from '../pages/personal/personal.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { MessagesPageModule } from '../pages/messages/messages.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { FriendsPageModule } from '../pages/friends/friends.module';
import { NewsPageModule } from '../pages/news/news.module';
import { SearchPageModule } from '../pages/search/search.module';
import { UserPageModule } from '../pages/user/user.module';
import { PrivacyPageModule } from '../pages/privacy/privacy.module';
import { NotesPageModule } from '../pages/notes/notes.module';
import { GroupPageModule } from '../pages/group/group.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation';

import { UserService } from '../pages/login/user.service'
import { IonicStorageModule } from '@ionic/storage';
import { ProfileService } from '../pages/profile/profile.service';

import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

    // InformationPage,
    // ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    InformationPageModule,
    ContactPageModule,
    PersonalPageModule,
    SettingsPageModule,
    ProfilePageModule,
    MessagesPageModule,
    ChatPageModule,
    FriendsPageModule,
    NewsPageModule,
    SearchPageModule,
    UserPageModule,
    PrivacyPageModule,
    LoginPageModule,
    NotesPageModule,
    GroupPageModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // LoginPage,
    // InformationPage,
    // ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    ProfileService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    FileOpener,
    FilePath,
  ],
  schemas: 
  [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}
