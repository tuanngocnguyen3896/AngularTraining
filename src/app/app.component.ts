import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // tên thẻ
  // templateUrl: './app.component.html', thành phần giao diện của thẻ
  template: ` 
  <div class="container">
    Cybersoft
    <!-- <app-bai-tap-layout></app-bai-tap-layout> -->
    <app-one-way-binding></app-one-way-binding>
  </div>
  `,
  styleUrls: ['./app.component.scss'] // đường dẫn đến file css
})
// xử lí các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'bc01angular';
}
