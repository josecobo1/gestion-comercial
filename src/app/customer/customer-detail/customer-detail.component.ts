import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/interfaces/customer';
import { list } from '../../data/customers';
interface Comment {

  title:string;
  date:string;
  text:string;
}


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

/*   id: string;
  name: string;
 */
  hidden =true;
  customer: Customer = {};
  formGroup: FormGroup;
  constructor(private router: Router,
              private routes: ActivatedRoute,
              private fb: FormBuilder) {

                router.events.subscribe(
                  (event) =>{
                    if( event instanceof NavigationEnd){
                      this.hidden =true;
                    }
                  }
                )

              }

  ngOnInit(): void {

    this.refresh();
    this.formGroup = this.fb.group(this.customer);
  }

  refresh(){
    this.routes.params.subscribe(
      (params: Params) => {
        this.customer = {...params};
      }
    )
  }

  edit(){
    this.hidden = false;
    this.formGroup.setValue(this.customer);
  }

  saveData(){
    this.hidden = true;
    this.customer = this.formGroup.value;
    list.splice(list.findIndex(e=> e.id == this.customer.id),1,this.formGroup.value);
  }
}
