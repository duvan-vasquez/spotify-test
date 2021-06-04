import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { GlobalEnvironment } from './shared/global.environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Drivers, Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { InteceptorService } from './core/services/inteceptor.service';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import { CommonService } from './core/services/common.service';
import { StorageService } from './core/services/storage.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot({
      name: environment.database.name,
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    })
  ],
  exports: [
    ReactiveFormsModule,
    ComponentModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpotifyAuth,
    {provide: HTTP_INTERCEPTORS, useClass: InteceptorService, multi: true},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
