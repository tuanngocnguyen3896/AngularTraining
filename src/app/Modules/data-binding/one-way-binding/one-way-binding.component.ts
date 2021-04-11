import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {
  // tất cả thuộc tính của component đều là state
  name:string = 'cybersoft';
  imgSrc:string = 'http://picsum.photos/200/200';
  // Mô hình MVVM: model view view model
  constructor() { }
  showTitle = () => {
    return 'Cybersoft BootCamp01';
  }
  changeName = (value:string) => {
    this.name = value;
  }



  
  ngOnInit(): void {
  }

}
