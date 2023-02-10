import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectServiceService {
  writeCount(count: number) {
    console.warn(count);
  }
  constructor() { }
}
