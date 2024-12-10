import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  pure: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(contactNumber: number, code?: string): string {
    let countryCode = '+91';
    switch (code) {
      case 'USA': {
        countryCode = '+1';
        break;
      }
      case 'AUS': {
        countryCode = '+61';
        break;
      }
      case 'GER': {
        countryCode = '+49';
        break;
      }
      default: {
        countryCode = '+91';
        break;
      }
    }
    return countryCode + ' ' + contactNumber;
  }
}

// Reverse the string -> "Hello World" -> "dlroW 0lleH"
