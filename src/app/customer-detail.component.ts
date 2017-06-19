import { Component, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'customer-detail',
  template: `
    <div *ngIf="customer">
      <h2>{{customer.name}} details!</h2>
      <div>
        <label>id: </label>{{customer.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="customer.name" placeholder="name"/>
      </div>
      <div>
        <label>phone: </label>{{customer.phone}}
      </div>
      <div>
        <label>address: </label>{{customer.address}}
      </div>
    </div>
  `
})

export class CustomerDetailComponent {
  @Input() customer: Customer;
}
