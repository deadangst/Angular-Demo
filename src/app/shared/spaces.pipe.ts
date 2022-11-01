import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertirAEspacios'
})
export class ConvertirAEspaciosPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
