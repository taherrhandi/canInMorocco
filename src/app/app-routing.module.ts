import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { SubmissionComponent } from './layout/submission/submission.component';
import { PracticalInformationComponent } from './layout/practical-information/practical-information.component';
import { ProgramComponent } from './layout/program/program.component';
import { RegistrationComponent } from './layout/registration/registration.component';
import { SponsorsComponent } from './layout/sponsors/sponsors.component';
import { AboutComponent } from './layout/about/about.component';
import { TravelToursComponent } from './layout/travel-tours/travel-tours.component';
import { QuestionComponent } from './layout/question/question.component';
import { ReservationComponent } from './layout/reservation/reservation.component';
import { TransportComponent } from './layout/transport/transport.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'submission', component: SubmissionComponent },
  { path: 'practical_information', component: PracticalInformationComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'travel&tours', component: TravelToursComponent },
  { path: 'about', component: AboutComponent },
  { path: 'FAQ', component: QuestionComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'transport', component: TransportComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
