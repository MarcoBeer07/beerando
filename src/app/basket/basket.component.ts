import { Component, Input, OnInit } from '@angular/core';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

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



}
