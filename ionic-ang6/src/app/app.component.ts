import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Feed List',
      url: '/feedList',
      icon: 'list'
    },
    {
      title: 'Language',
      url: '/lang',
      icon: 'list'
    },
    {
      title: 'SignUp Details',
      url: '/signupDetails',
      icon: 'list'
    },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'log-in'
    // },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out',
      
      
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertController: AlertController,
  ) {
    this.initializeApp();
  }
  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Network Error',
      message: 'Please check your network connection and try again...',
      buttons: ['OK']
    });

    await alert.present();
  }
}
