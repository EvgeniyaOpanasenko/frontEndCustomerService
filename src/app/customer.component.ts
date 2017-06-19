import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
 /*templateUrl: './customer-list.component.html',*/
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit {
  title = 'Tour of customers';
  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  getCustomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(Customer: Customer): void {
    this.selectedCustomer = Customer;
  }
}
