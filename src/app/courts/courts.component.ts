import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.scss']
})
export class CourtsComponent implements OnInit {


  courts: any = [
    { name: 'Schokoladen Muffin', description: 'Muffin mit Schokoladenfüllung', price: 2.90 },
    { name: 'Erdbeer Muffin', description: 'Muffin mit Erdbeerfüllung', price: 3.90 },
    { name: 'Streusel Muffin', description: 'Muffin mit Bunten Streuseln', price: 3.20 },
    { name: 'Schoko-Bananen Muffins', description: 'Muffin mit Bananen-Schokoladen Füllung', price: 4.60 }];


  constructor() { }

  ngOnInit(): void {
  }

  addCourtToBasket() {
  }

}
