import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  // pure: false
})
export class SortPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    
    // since we are using promises, check if we have any data to work with before proceeding
    if (!items) {
        return null;
    }
    
    // various cool sorting algorithms depending on the argument passed
    switch(args) {
      case "name":
        return items.sort(function(a,b) {return a.name > b.name;}); 
      case "position":
        return items.sort(function(a,b) {return a.position > b.position;}); 
      case "date":
        return items.sort(function(a,b) {return a.applied < b.applied;});
      case "shuffle":
        return items.sort(function (a, b) {return Math.random() - 0.5;});
      default:
        return items; // nothing passed? return the list as is
    }
  }

}
