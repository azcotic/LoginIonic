import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild("username") user;
	@ViewChild("password") password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value) 
      .then(data => {
        let alertRegister = this.alertCtrl.create({
          title: 'Register Successful',
          subTitle: data.message,
          buttons: ['OK']
        });
        alertRegister.present();
        console.log('got data', data);
      })
      .catch(error => {
        let alertRegisterFail = this.alertCtrl.create({
          title: 'Register Successful',
          subTitle: error.message,
          buttons: ['OK']
        });
        alertRegisterFail.present();
        console.log('get an error', error);
      });
    console.log("Would register in with", this.user.value, this.password.value);
  }
}
