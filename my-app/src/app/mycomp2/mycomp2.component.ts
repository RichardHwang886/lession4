import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mycomp2',
  templateUrl: './mycomp2.component.html',
  styleUrls: ['./mycomp2.component.scss']
})
export class Mycomp2Component implements OnInit {

  id: any = 0;
  list : any[] = [
    'coffee', 'tea', 'milk'
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
