import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LogoSecurityComponent } from './logo-security/logo-security.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { ReverseTimerComponent } from './reverse-timer/reverse-timer.component';
import { OptInComponent } from './basic/opt-in/opt-in.component';
import { SignUpComponent } from './basic/sign-up/sign-up.component';
import { RegFormComponent } from './basic/reg-form/reg-form.component';
import { MenuComponent } from './menu/menu.component';
import { OptInPageComponent } from './pages/opt-in-page/opt-in-page.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { VideoComponent } from './video/video.component';
import { FooterRegComponent } from './footer-reg/footer-reg.component';
import { HeaderRegComponent } from './header-reg/header-reg.component';
import { MainRegComponent } from './main-reg/main-reg.component';
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { SignUpBtnComponent } from './basic/sign-up-btn/sign-up-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LogoSecurityComponent,
    CurrentTimeComponent,
    ReverseTimerComponent,
    OptInComponent,
    SignUpComponent,
    RegFormComponent,
    MenuComponent,
    OptInPageComponent,
    HeaderInfoComponent,
    VideoComponent,
    FooterRegComponent,
    HeaderRegComponent,
    MainRegComponent,
    RegPageComponent,
    SignUpBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
