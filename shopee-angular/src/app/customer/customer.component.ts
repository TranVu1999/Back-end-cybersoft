import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  isShowCustomerHeader = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.listenRouterChange();
    this.isShowCustomerHeader = !this.router.url.includes('authorization');
  }

  // Handle Events
  listenRouterChange(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        console.log('start');
      } else if(event instanceof NavigationEnd) {
        console.log('end');
      }
    });
  }

}
