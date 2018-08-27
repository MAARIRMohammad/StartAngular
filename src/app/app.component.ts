import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent implements OnInit{
  title = 'StartAngular';
  valtest = environment.valtest;
  item = [
    {},
    {},
  ];
  private data: string[];
  constructor(private myService: MyserviceService) {
  }
  ngOnInit(): void {
    this.data = this.myService.doSomething();
  }
}
