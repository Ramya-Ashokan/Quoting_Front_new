import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteModuleRoutingModule } from './quote-module-routing.module';
import { SelectPageComponent } from './select-page/select-page.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectPageComponent,
    CustomerHomeComponent
    
  ],
  imports: [
    CommonModule,
    QuoteModuleRoutingModule,
    FormsModule
  ]
})
export class QuoteModuleModule { }
