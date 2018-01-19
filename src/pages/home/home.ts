import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items: Observable<any[]>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,  afDB: AngularFireDatabase) {

  }
  
  signInUser(){
  	this.navCtrl.push(LoginPage);
  }
  registerUser(){
  	this.navCtrl.push(RegisterPage);
  }
}
