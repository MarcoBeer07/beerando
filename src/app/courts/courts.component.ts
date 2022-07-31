import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { SenderService } from '../sender.service';


@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.scss']
})
export class CourtsComponent implements OnInit {

  public courts: any = [];

  constructor(private _senderService: SenderService, private router: Router, private route: ActivatedRoute) {

  }




  ngOnInit(): void {
    this.courts = this._senderService.getCourts();

  }

  addCourtToBasket(i: any) {
    this._senderService.basketName.push(this.courts[i]['name']);
    this._senderService.basketDescription.push(this.courts[i]['description']);
    this._senderService.basketPrice.push(this.courts[i]['price']);
  }


  reloadCurrentRoute() {
    this.router.navigate([this.router.url])
  }

}
