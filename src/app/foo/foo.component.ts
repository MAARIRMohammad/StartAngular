import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  status = false;
  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
    if (this.status) {
      this.status = !this.status;
    } else {
      this.status = !this.status;
    }
  }
}
