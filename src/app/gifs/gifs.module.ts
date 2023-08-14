import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsCardComponent } from './components/card/gifs-card.component';
import { GifsCardListComponent } from './components/card-list/gifs-card-list.component';
import { HomePageComponentComponent } from './pages/home-page-component/home-page-component.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GifsCardComponent,
    GifsCardListComponent,
    HomePageComponentComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponentComponent
  ]
})
export class GifsModule { }
