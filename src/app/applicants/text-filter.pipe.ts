import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter',
  // pure: false
})
export class TextFilterPipe implements PipeTransform {

  transform(items: any, args: string): any {

    // if no data items are passed then do nothing
    if (!items) {
      return null;
    }

    return items.filter(
      item => 
        item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1 ||  // filter on name, remove case sensitivity
        item.position.toLowerCase().indexOf(args.toLowerCase()) !== -1  // or position, same again
    );
  }

}
