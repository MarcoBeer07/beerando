import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  sendData: boolean = false;

  constructor(private _senderService: SenderService, private router: Router, private route: ActivatedRoute) {

  }

  data: any = this._senderService;



  ngOnInit(): void {

  }





}
