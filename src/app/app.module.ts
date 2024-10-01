import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { TicketPageComponent } from './components/ticket-page/ticket-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventListComponent,
    CreateEventComponent,
    TicketPageComponent,
    NavbarComponent,
    EventDetailComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'events', component: EventListComponent },
      { path: 'create-event', component: CreateEventComponent },
      { path: 'ticket/:id', component: TicketPageComponent },
      { path: 'login', component: LoginComponent } // Ticket page route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
