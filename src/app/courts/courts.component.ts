import { Component, Input, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';


@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.scss']
})
export class CourtsComponent implements OnInit {

  public courts: any = [];
  public basketName: any = [];
  public basketDescription: any = [];
  public basketPrice: any = [];


  constructor(private _senderService: SenderService) { }


  ngOnInit(): void {
    this.courts = this._senderService.getCourts();
    this.basketName = this._senderService.getBasketName();
    this.basketDescription = this._senderService.getBasketDescription();
    this.basketPrice = this._senderService.getBasketPrice();
  }

  addCourtToBasket() {
    this.basketName.push('affe')
    console.log(this.basketName)
  }

}
