import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-total-cart',
  templateUrl: './total-cart.component.html',
  styleUrls: ['./total-cart.component.scss']
})
export class TotalCartComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('data: ', this.route.snapshot.data['test']);
  }

}
