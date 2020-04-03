import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent implements OnInit {
  @Input('p1') p1: string = '沒有輸入值!!';
  @Output() getValueChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  btnClick(event){
    let s = `${this.p1} from MyComponent`;
    this.getValueChanged.emit(s);
  }
}
