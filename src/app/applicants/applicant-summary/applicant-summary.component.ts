import { Component, Input } from '@angular/core';
import { JobApplication } from '../../job-application';
import { FavesService } from '../../services/faves.service';

@Component({
  selector: 'app-applicant-summary',
  templateUrl: './applicant-summary.component.html',
  styleUrls: ['./applicant-summary.component.css']
})

export class ApplicantSummaryComponent {
  @Input() 
  thisApp: JobApplication; // the application represented in this component
  
  // dependency inject our Fave Service
  constructor(private favesService: FavesService) { } 

  fave(app) {
    app.isFaved = true; // set current fave state to true
    this.favesService.addFave(app.id); // save the fact we have faved it
    event.stopPropagation(); // stop the click from bubbling up
  }
  
  unfave(app) {
    app.isFaved = false; // set current fave state to false
    this.favesService.removeFave(app.id); // save it
    event.stopPropagation(); // stop the click from bubbling up
  }
}
