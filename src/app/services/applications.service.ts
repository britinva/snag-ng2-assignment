import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { JobApplication } from '../job-application';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApplicationsService {

  /* No API, so let’s fetch the data from a gist */
  private applicantionsUrl = 'https://gist.githubusercontent.com/britinva/40c45b94d234a7163987b665f43a3325/raw/2f7acb8b16cb4dc1101f25795f6e62f1be0260f1/data.js';

  constructor(private http: Http) {} // dependency inject http

  getApplications() : Observable<JobApplication[]> {
    // Get the JSON, map it and return an observable
    return this.http.get(this.applicantionsUrl)
                    .map((response) => response.json())
                    .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    /* Copied this from somewhere, and it returns a promise so
    probably needs updating */
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
