import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FavesService {

  constructor() { }

  setFaves(faves: number[]) {
    /* sets localStorage with an array, overwrites any existing value */
    localStorage.setItem('faves', JSON.stringify(faves));
    return Observable.of(true);
  }
  
  addFave(applicationId: number) {
    /* Retrieves the array from local storage, pushes the passed value,
      rewrites the updated array back to localStorage */
    let faves = JSON.parse(localStorage.getItem('faves'));
    if (faves == null) {
      faves = [];
    }
    faves.push(applicationId);
    this.setFaves(faves);
  }
  
  removeFave(applicationId: number) {
    /* Gets the array from local storage, finds the passed value in the array,
      splices out that value, rewrites the updated array back to localStorage */
    let faves = JSON.parse(localStorage.getItem('faves'));
    let index = faves.indexOf(applicationId);
    if (index > -1) {
      faves.splice(index, 1);
    }
    this.setFaves(faves);
  }
    
  getFaves(): Observable<number[]> {
    // Returns the entire list in localStorage as an observable
    const faves = JSON.parse(localStorage.getItem('faves'));
    return Observable.of(
      faves || {} // creates an empty object if local storage is null, can be a function
    );
  }
}
