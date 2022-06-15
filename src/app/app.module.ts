import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { SocialsComponent } from './socials/socials.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailComponent,
    LayoutComponent,
    MenuComponent,
    SocialsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
