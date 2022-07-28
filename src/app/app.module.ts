import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CourtsComponent } from './courts/courts.component';
import { BasketComponent } from './basket/basket.component';
import { SenderService } from './sender.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourtsComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
