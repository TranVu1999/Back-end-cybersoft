import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pickElement',
    //   pure: false
})
export class PickElementPipe implements PipeTransform {

    constructor() {}

    transform(value: any): any {
        console.log('title: ', 'debugger');
        return value;
    }

}
