import { Component } from '@angular/core';
import { ApplicantSummaryComponent } from '../applicant-summary/applicant-summary.component';

@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css']
})

export class ApplicantDetailComponent extends ApplicantSummaryComponent {
  // call Superclass versions of method since they do the same thing, yay OOP!
  fave(app) { super.fave(app); }
  unfave(app) { super.unfave(app); }
}
