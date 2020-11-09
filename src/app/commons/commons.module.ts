import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsRoutingModule } from './commons-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, NotfoundComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    MaterialModule
  ],
  exports: [HeaderComponent]
})
export class CommonsModule { }
