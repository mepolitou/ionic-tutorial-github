import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubService } from '../../services/github.service';
//import { AlertController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {

  public foundRepos;
  public username;

//  constructor(public navCtrl: NavController, private github: GitHubService, public alertCtrl: AlertController) { }
  constructor(private github: GitHubService, private nav: NavController) { }

  getRepos() {
    //console.log('crap1');
    this.foundRepos = this.github.getRepos(this.username);
    //console.log('crap2');
  }

  goToDetails(repo) {
    this.nav.push(DetailsPage, { repo: repo });
  }

//  showAlert() {
//    let alert = this.alertCtrl.create({
//      title: 'New Friend!',
//      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
//      buttons: ['OK']
//   });
//    alert.present();
//  }  
}
