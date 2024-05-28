import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { RouteOneComponent } from './components/route-one.component';
import { RouteTwoComponent } from './components/route-two.component';

import { RouteThreeComponent } from './components/route-three.component';
import { AppRoutingModule } from './modules/app-routing.module';
//import { MatButtonModule } from "@angular/material/buttons";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    //  MatButtonModule,
  ],
  declarations: [
    AppComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
