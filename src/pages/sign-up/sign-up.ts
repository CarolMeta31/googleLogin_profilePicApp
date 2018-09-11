import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { Alert, IonicPage, NavController, NavParams,
 AlertController,Loading,LoadingController} from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import {NgZone} from '@angular/core';

import { ImageProvider } from './../../providers/image/image';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  private load:Loading;
  email:string;
  password:string;
afireauth:any;

userProfile:any;

 imageurl  = 'https://firebasestorage.googleapis.com/v0/b/bookingdatabase-df929.appspot.com/o/logo.png?alt=media&token=AIzaSyDDzSIbyFijiLeE9uUhye8OnYMFYV65jv0';
  moveon = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,public alertCtrl:AlertController,
    private auth:AuthProvider,public loadCtrl:LoadingController,
    public zone:NgZone,
    private camera:Camera,private imagePicker:ImagePicker,
    private imgPro:ImageProvider) {

   }

 

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SignUpPage');
  }



  signUp(){
    if(!this.email && !this.password){
  console.log('enter email and password')
    }
    else{
      this.auth.signUp(this.email,this.password).then(authData=>{
        this.load.dismiss().then(()=>{
          this.navCtrl.setRoot('LoginPage');
        })
      },error=>{
         this.load.dismiss().then(()=>{
       const alert :Alert =this.alertCtrl.create({
         message:error.message,
         buttons:[{ text:'ok',role:'cancel'}]
       })
       alert.present()
      })
  })
   this.load=this.loadCtrl.create();
   this.load.present()
    }
  

    }

     back(){
        this.navCtrl.push('LoginPage');
      }

 
  chooseimage() {
        let loader = this.loadCtrl.create({
          content: 'Please wait'
        })
        loader.present();
        this.imgPro.uploadimage().then((uploadedurl: any) => {
          loader.dismiss();
          this.zone.run(() => {
            this.imageurl  = uploadedurl;
            this.moveon = false;
          })
        })
      }



}
