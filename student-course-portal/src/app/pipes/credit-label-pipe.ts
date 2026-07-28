import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {

  transform(credits: number | null | undefined): string {

    // Handle null, undefined, or zero credits
    if (!credits || credits === 0) {
      return 'No Credits';
    }

    // Singular form
    if (credits === 1) {
      return '1 Credit';
    }

    // Plural form
    return `${credits} Credits`;
  }

}