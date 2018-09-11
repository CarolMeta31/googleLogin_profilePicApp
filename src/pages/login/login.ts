import { Component } from '@angular/core';
import { AlertController,Alert,LoadingController,
  Loading,IonicPage, NavController} from 'ionic-angular';
  import { AuthProvider } from './../../providers/auth/auth';
  import { HomePage } from './../home/home';
import { GooglePlus} from '@ionic-native/google-plus';
import 'firebase/database';
import firebase from 'firebase/app';
import 'firebase/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private load:Loading;

  email:string;
  password:string;


  constructor(public navCtrl: NavController, 
    public alertCtrl:AlertController,private authPro:AuthProvider,
     public loadCtrl:LoadingController,private googlePlus:GooglePlus) {


     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  SignUp():void{
    this.navCtrl.push('SignUpPage')
  }

  signIn(){
    if(!this.email && !this.password){
  console.log('enter email and password')
    }
    else{
      this.authPro.signIn(this.email,this.password).then(authData=>{
        this.load.dismiss().then(()=>{
          this.navCtrl.setRoot(HomePage);
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
  

    }//end of method
    
    // forgetPassword(){
    //   this.navCtrl.push('RegisterPage')
    // }

    loginWithGoogle() {
    this.googlePlus.login({
      'webClientId':'889699480060-3bdubdih9argl4v8dm3benbm727dfusq.apps.googleusercontent.com',
      'offline':true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
        alert("Login success");
      }).catch(ns=>{
        alert("Not success")
      })
    })

  }


}

