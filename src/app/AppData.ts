import { Injectable } from '@angular/core';
import { AckOffline, AckApi } from 'ack-angular/modules/offline';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';
import { headerTemplates } from './headerTemplates';
import { user } from './types';

interface offlineData {
  user: user;
  completedIntroAt: number;
}

interface environment {
  platform: string;
  env: string;
}

declare var window: any;

@Injectable()
export class AppData {
  taps = 0;
  debug: boolean;
  width: number;//px - htmlWidthModel
  environment: environment = {} as environment;
  wwwBasePath: string;

  offline: offlineData = {} as offlineData;
  loadOffline: Promise<any> = Promise.resolve();
  load: Promise<any> = Promise.resolve();
  loaded: boolean;

  headerTemplates = headerTemplates

  constructor(
    public AckApi: AckApi,
    public AckOffline: AckOffline,
    public RouteHistory: RouteHistory,
    public Router: Router
  ) {
    this.fireLoad();

    // cordova only
    document.addEventListener('deviceready', () => {
      window.Ionic.WebView.getServerBasePath(r => {
        this.wwwBasePath = r;
      })
    }, false);
  }

  fireLoad() {
    console.log({
      message: 'loading app data'
    });

    this.load = this.load
      .then(() => this.loadEnvironment())
      .then(() => this.loadOfflineStorage())
      .then(() => {
        const icon = document.getElementById('mainLoadIcon');
        icon.parentNode.removeChild(icon);

        if (this.environment.env === 'production') {
          this.AckApi.config.baseUrl = "https://ackerapple.com/functions"
        } else {
          this.AckApi.config.baseUrl = "http://localhost:5000/family-api"
        }

        this.loaded = true;
        console.log({
          message: 'loaded app data'
        });
      });
  }

  debugTap() {
    ++this.taps

    if (this.taps % 5 === 0) {
      this.debug = !this.debug
    }
  }

  loadEnvironment(): Promise<void> {
    console.log({
      message: 'requesting env setup'
    });

    return new Promise((res, rej) => {
      const http = new XMLHttpRequest();
      const url = '/runtime.json';

      http.open('GET', url);
      http.send();

      http.onreadystatechange = (e) => {
        if (http.readyState === 4 && http.status === 200) {
          console.log({
            message: 'requested env setup complete',
            readyState: http.readyState,
            status: http.status
          });
          res(JSON.parse(http.responseText));
        } else {
          console.log({
            message: 'requesting env setup',
            readyState: http.readyState,
            status: http.status
          });
        }
      };
    })
    .then((setup: any) => {
      Object.assign(this.environment, setup)//paste runtime config
    });
  }

  log(log: {message: string, [index: string]: any}) {
    console.log(log);
  }

  navTo(url, ar?: ActivatedRoute) {
    this.log({
      message: 'navTo',
      url
    });

    this.Router.navigate([url], { relativeTo: ar });
  }

  navBack() {
    this.RouteHistory.goBack();
  }

  navAhead() {
    this.RouteHistory.goForward();
  }

  loadOfflineStorage(): Promise<offlineData> {
    return this.loadOffline = this.loadOffline
      .then(() => this.AckOffline.get('ack-app'))
      .then((offline: offlineData) => {
        this.applyOfflineConfig(offline)
        if (!this.offline.completedIntroAt) {
          this.Router.navigate(['/intro']);
        }
        return offline;
      })
  }

  applyOfflineConfig(data: offlineData) {
    Object.assign(this.offline, data);
    this.offline.user = this.offline.user || {} as user;

    /*
        const user = this.offline.user
        if( user ){
          const security = this.offline.user.security
          if( security ){
            this.AckApi.config.$http.headers['Authorization'] = security.token
          }
        }
    */
  }

  completedIntro() {
    this.offline.completedIntroAt = Date.now()
    this.save()
  }

  save() {
    return this.loadOffline = this.loadOffline
      .then(() => this.AckOffline.set('ack-app', this.offline))
      .catch(e => {
        // log(this.constructor.name,"#save","error",e.message)
        // this.AppErrors.setLast(e)
        this.loadOffline = Promise.resolve()
        return Promise.reject(e)
      })
  }

  clearSession() {
    // delete this.offline.user.security
    return this.AckOffline.clear('t2c');
  }
}