import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <p>Đây là component demo</p>
  `,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
