import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  id: string;
  name: string;

  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {

    this.routes.params.subscribe(
      (params: Params) => {
        this.id = params.id
        this.name = params.name
      }
    )
  }

}
