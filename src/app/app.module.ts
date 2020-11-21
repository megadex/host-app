import { BrowserModule } from '@angular/platform-browser'; 
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ModalappComponent } from './modalapp/modalapp.component';
import { HomeComponent } from './home/home.component';
import { ReloginComponent } from './relogin/relogin.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalappComponent,
    HomeComponent,
    ReloginComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'map', component: MapComponent },
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ModalappComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
