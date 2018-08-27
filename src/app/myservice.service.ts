import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private data: string[] = ['foo' , 'bar'];
  constructor() { }

  doSomething() {
    return this.data;
  }
}
