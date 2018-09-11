import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { GooglePlus} from '@ionic-native/google-plus';
import { AuthProvider } from '../providers/auth/auth';
import { ImageProvider } from '../providers/image/image';
import {AngularFireModule} from  'angularfire2';

import * as firebase from 'firebase';


 

export const config = {
  apiKey: "AIzaSyDDzSIbyFijiLeE9uUhye8OnYMFYV65jv0",
  authDomain: "bookingdatabase-df929.firebaseapp.com",
  databaseURL: "https://bookingdatabase-df929.firebaseio.com",
  projectId: "bookingdatabase-df929",
  storageBucket: "bookingdatabase-df929.appspot.com",
  messagingSenderId: "889699480060"
};

 firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ImageProvider,
     Camera,
     File,
    ImagePicker,
    FileChooser,
    FilePath,
    GooglePlus,
    AngularFireModule
  ]
})
export class AppModule {}
