import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';


@Component({
  selector: 'page-main-list',
  templateUrl: 'main-list.html',
})
export class MainList {

  grid: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
     this. grid = [
       {
         img:'assets/img/agafarma.jpeg',
         titulo: 'AGAFARMA'      
      },
       {
         img:'assets/img/celetro.png',
         titulo: 'CELETRO'
        },
       {
         img:'assets/img/STEINDORF.jpeg',
         titulo: 'STEINDORFF'
      
      }]
  }
// active like fun
  like(item){
    item.activeLike = !item.activeLike;
  }
// shareModal
  presentshareModal() {
    let shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
    shareModal.present();
  }

}