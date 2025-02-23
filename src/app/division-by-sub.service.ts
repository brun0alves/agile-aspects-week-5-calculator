import { Injectable } from '@angular/core';
import { SubService } from './sub.service';

@Injectable({
  providedIn: 'root'
})
export class DivisionBySubService {

  constructor(private subService: SubService) { }

  division(num1: number, num2: number): number {
    let subTmp = num1;
    let result = 0;

    while (subTmp >= num2) {
        subTmp = this.subService.sub(subTmp, num2);
        result++;        
    }

    return result;
  }
}
