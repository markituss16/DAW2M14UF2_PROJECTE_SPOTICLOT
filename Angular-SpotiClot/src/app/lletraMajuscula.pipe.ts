import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'primeraMajuscula'
})

export class pipeLletraMajuscula implements PipeTransform {
    transform(value: string, args: any[]): string {
        if (value === null){
            return 'Res assignat.';
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}