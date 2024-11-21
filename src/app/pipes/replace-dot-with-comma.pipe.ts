import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDotWithComma',
  standalone: true
})
export class ReplaceDotWithCommaPipe implements PipeTransform {
  transform(value: string | number | undefined): string {
    if (value === undefined) {
      return '0,00';
    }
    const formattedValue = Number(value).toFixed(2);
    return formattedValue.replace('.', ',');
  }
}
