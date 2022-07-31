import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CourtsComponent } from './courts/courts.component';

const routes: Routes = [
  { path: 'basket', component: BasketComponent },
  { path: '', component: CourtsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
