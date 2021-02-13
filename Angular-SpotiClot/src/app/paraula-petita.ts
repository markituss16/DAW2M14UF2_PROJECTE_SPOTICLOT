import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'paraulaPetita'
})

export class pipeParaulaPetita implements PipeTransform {
    transform(value: number): any {  
        return '<small>' + value + '</small>';  
    } 
}