import { Injectable } from '@angular/core';


import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Injectable()
export class CustomerService {

  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }

  getCusromersSlowly(): Promise<Customer[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCustomers()), 2000);
    });
  }
}
