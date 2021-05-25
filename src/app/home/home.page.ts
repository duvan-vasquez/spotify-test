import { Component, OnInit } from '@angular/core';
import { IonicUtil } from '../core/utils/ionic.util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  ionViewDidEnter() {
    IonicUtil.reviewSplash();
  }
}
