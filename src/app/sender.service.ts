import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  getCourts() {
    return [
      { name: 'Schokoladen Muffin', description: 'Muffin mit Schokoladenfüllung', price: 2.90 },
      { name: 'Erdbeer Muffin', description: 'Muffin mit Erdbeerfüllung', price: 3.90 },
      { name: 'Streusel Muffin', description: 'Muffin mit Bunten Streuseln', price: 3.20 },
      { name: 'Schoko-Bananen Muffins', description: 'Muffin mit Bananen-Schokoladen Füllung', price: 4.60 }];

  }

  getBasketName() {
    return [''];
  }
  getBasketDescription() {
    return [''];
  }
  getBasketPrice() {
    return [];
  }

  constructor() { }
}
