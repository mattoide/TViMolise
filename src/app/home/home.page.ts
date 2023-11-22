import { Component } from '@angular/core';
import {urls} from '../constants/urls'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  banner = "assets/images/tvimolise_logo.png";

  constructor() {}

  protected readonly urls = urls;
}
