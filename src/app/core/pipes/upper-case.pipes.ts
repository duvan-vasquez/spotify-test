import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upperCase'
})

export class UpperCase implements PipeTransform {

    transform(text: string) {
        return text[0].toUpperCase() + text.substring(1).toLowerCase();
    }
    
}