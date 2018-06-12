import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { IonicPage} from 'ionic-angular';
import { GitHubService } from '../../services/github.service';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [GitHubService]
})
export class DetailsPage {

  public readme = '';
  public repo;

  constructor(private github: GitHubService, private nav: NavController, private navParams: NavParams) {
//  constructor(private github: GitHubService) {
    this.repo = navParams.get('repo');
    //console.log(this.repo);

    this.github.getDetails(this.repo).subscribe(
      data => this.readme = data.text(),
      err => {
          if (err.status == 404) {
              this.readme = 'This repo does not have a README. :(';
          } else {
              console.error(err);
          }
      },
      () => console.log('getDetails completed')
//      () => console.log(data)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
