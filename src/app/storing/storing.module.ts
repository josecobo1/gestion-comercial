import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoringRoutingModule } from './storing-routing.module';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [IncomingComponent, OutgoingComponent, ListComponent],
  imports: [
    CommonModule,
    StoringRoutingModule
  ]
})
export class StoringModule { }
