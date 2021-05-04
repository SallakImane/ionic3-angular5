import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {RestService} from "../rest.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestService) {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error =>  this.errorMessage = <any>error);
  }

}
