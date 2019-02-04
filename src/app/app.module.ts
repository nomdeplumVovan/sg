import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';

//============opt-in-page===============
import { OptInPageComponent } from './pages/opt-in-page/opt-in-page.component';
import { FooterComponent } from './pages/opt-in-page/footer/footer.component';
import { HeaderComponent } from './pages/opt-in-page/header/header.component';
import { MainComponent } from './pages/opt-in-page/main/main.component';

// ============reg-form-page==============
import { RegPageComponent } from './pages/reg-page/reg-page.component';
import { FooterRegComponent } from './pages/reg-page/footer-reg/footer-reg.component';
import { HeaderRegComponent } from './pages/reg-page/header-reg/header-reg.component';
import { MainRegComponent } from './pages/reg-page/main-reg/main-reg.component';

// ========basic-=========================
import { OptInComponent } from './basic/opt-in/opt-in.component';
import { SignUpComponent } from './basic/sign-up/sign-up.component';
import { RegFormComponent } from './basic/reg-form/reg-form.component';
import { SignUpBtnComponent } from './basic/sign-up-btn/sign-up-btn.component';

// =========utils=========================
import { HeaderInfoComponent } from './header-info/header-info.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { ReverseTimerComponent } from './reverse-timer/reverse-timer.component';
import { MenuComponent } from './menu/menu.component';
import { VideoComponent } from './video/video.component';
import { LogoSecurityComponent } from './logo-security/logo-security.component';


// =======not-found-page==================
import { NotFoundComponent } from './pages/not-found/not-found.component';


//=======route definition================
const appRoutes: Routes = [
  { path: '', component: OptInPageComponent },
  { path: 'registr', component: RegPageComponent },
  { path: '**', component: NotFoundComponent }
  // { path: '**', redirectTo: '/' }
];


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
    SignUpBtnComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
