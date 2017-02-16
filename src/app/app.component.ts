import { Component, OnInit } from '@angular/core';
// Sub components
import { ApplicantSummaryComponent } from './applicants/applicant-summary/applicant-summary.component';
// Job Application Model
import { JobApplication } from './job-application';
// Services
import { FavesService } from './services/faves.service';
import { ApplicationsService } from './services/applications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Apply Jobs';
  jobApplications: JobApplication[] = []; // API data will go here
  selectedApp: number; // Maintains currently selected App
  orderBy: string; // Current sort order

  // Dependency inject our two services
  constructor(private applicationsService: ApplicationsService, private favesService: FavesService) {
    this.orderBy = "date"; //Let’s defailt by date so newest at the top
  }

  ngOnInit(): void {
    this.getApplications(); // Try to fetch data after component initializes
  }

  getApplications(): void {
    /* Nested calls to our two services:
    First subscribe to our job applications (presumably from the API )
    Then grab our list of faves (presumably from localStorage) */
    
    this.applicationsService.getApplications().subscribe((data) => {
      this.jobApplications = data;
      this.favesService.getFaves().subscribe((data) => {
        //console.log(data);
        for (let appId of data) {
          this.starFave(appId); //iterate through our list of faves
        }
      });
    });
  }

  starFave(applicationId): void {
    /* Accepts an applicationID and attempts to match the id in our list of
    JobApplications, setting the isFaved attribute to true when found */
    for (let application of this.jobApplications) {
      if (application.id == applicationId) {
        application.isFaved = true;
        break; // we found it, no need to keep looking
      }
    }
  }

  onSelect(application: JobApplication): void {
    // Toggle the applications selected state
    if (this.selectedApp == application.id) {
      this.selectedApp = null;
    } else {
      this.selectedApp = application.id;
    }
    //console.log (this.selectedApp);
    //console.log (application.id);
  }
}