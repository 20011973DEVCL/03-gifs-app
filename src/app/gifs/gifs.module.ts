import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponentComponent } from './pages/home-page-component/home-page-component.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsCardListComponent } from './components/gifs-card-list/gifs-card-list.component';

@NgModule({
  declarations: [
    GifsCardListComponent,
    HomePageComponentComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomePageComponentComponent
  ]
})
export class GifsModule { }
