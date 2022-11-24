import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeletehComponent } from './patient-deleteh/patient-deleteh.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientViewComponent } from './patient-view/patient-view.component';

const myRoute:Routes=[
  {
    path:"",
    component:PatientEntryComponent
  },
  {
    path:"search",
    component:PatientSearchComponent
  },
  {
    path:"delete",
    component:PatientDeletehComponent
  },
  {
    path:"view",
    component:PatientViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientSearchComponent,
    PatientDeletehComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
