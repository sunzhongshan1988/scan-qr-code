import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {CommonService} from '../core/services/common.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(private menu: MenuController,
              private barcodeScanner: BarcodeScanner,
              private commonService: CommonService) {}

  ngOnInit(): void {

  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  changeTheme($event) {
    if ($event.detail.checked) {
      this.commonService.setTheme('dark');
    } else {
      this.commonService.setTheme('light');
    }
  }

  scanQrCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.commonService.toast(`内容为:${barcodeData.text}`);
    }).catch(err => {
      this.commonService.toast(`错误:${err}`);
    });
  }
}
