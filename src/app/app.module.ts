import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextFilterPipe } from './applicants/text-filter.pipe';
import { SortPipe } from './applicants/sort.pipe';
import { ApplicantSummaryComponent } from './applicants/applicant-summary/applicant-summary.component';
import { ApplicantDetailComponent } from './applicants/applicant-detail/applicant-detail.component';
import { ApplicationsService } from './services/applications.service';
import { FavesService } from './services/faves.service';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    TextFilterPipe,
    SortPipe,
    ApplicantSummaryComponent,
    ApplicantDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    ApplicationsService,
    FavesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
