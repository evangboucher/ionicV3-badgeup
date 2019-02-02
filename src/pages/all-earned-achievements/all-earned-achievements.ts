import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AllEarnedComponent } from '@badgeup/badgeup-ionic-client';
/**
 * Generated class for the AllEarnedAchievementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-earned-achievements',
  templateUrl: 'all-earned-achievements.html',
})
export class AllEarnedAchievementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllEarnedAchievementsPage');
  }
  public goToAllEarnedComponent() {
    const modalPage = this.modalCtrl.create(AllEarnedComponent);
    modalPage.present();
  }

  public increaseClicks() {

  }

}
