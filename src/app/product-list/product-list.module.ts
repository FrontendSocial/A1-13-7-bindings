import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [SearchFiltersComponent, ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchFiltersComponent, ProductListComponent]
})
export class ProductListModule { }
