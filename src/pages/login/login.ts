import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import {LoggedinPage} from '../loggedin/loggedin';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild("username") user;
	@ViewChild("password") password;

  constructor(private fire: AngularFireAuth,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signInUser2(){
  	this.fire.auth.signInWithEmailAndPassword( this.user.value, this.password.value)
  		.then( data => {
  			console.log('got data', this.fire.auth.currentUser);
  			
	  			let alert = this.alertCtrl.create({
				  title: 'Login Successful',
				  subTitle: 'You are logged in',
				  buttons: ['OK']
				});
				alert.present();
				this.navCtrl.setRoot(LoggedinPage);
  		})
  		.catch( error => {
  			console.log('get an error', error);
  			let alertError = this.alertCtrl.create({
  				title:'Error in Login',
  				subTitle:error.message,
  				buttons:['OK']
  			});
  			alertError.present();
  		});
  		console.log("Would sign in with", this.user.value, this.password.value);
  		};
  		
  	
  }

