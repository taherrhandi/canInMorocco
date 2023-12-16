import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './layout/about/about.component';
import { PracticalInformationComponent } from './layout/practical-information/practical-information.component';
import { ProgramComponent } from './layout/program/program.component';
import { QuestionComponent } from './layout/question/question.component';
import { RegistrationComponent } from './layout/registration/registration.component';
import { SponsorsComponent } from './layout/sponsors/sponsors.component';
import { SubmissionComponent } from './layout/submission/submission.component';
import { TravelToursComponent } from './layout/travel-tours/travel-tours.component';
import { ScaffoldComponent } from './shared/scaffold/scaffold.component';
import { MainComponent } from './layout/home/main/main.component';
import { ImportantDatesComponent } from './layout/home/important-dates/important-dates.component';
import { AboutIfacComponent } from './layout/home/about-ifac/about-ifac.component';
import { AboutRabatComponent } from './layout/home/about-rabat/about-rabat.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PracticalInformationComponent,
    ProgramComponent,
    QuestionComponent,
    RegistrationComponent,
    SponsorsComponent,
    SubmissionComponent,
    TravelToursComponent,
    ScaffoldComponent,
    MainComponent,
    ImportantDatesComponent,
    AboutIfacComponent,
    AboutRabatComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
