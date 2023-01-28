import { Injectable } from '@nestjs/common';
import { CreateOrderEvent } from './events/create-order.event';

@Injectable()
export class AppService {
  private readonly products = [];
  saveProduct(data: CreateOrderEvent) {
    this.products.push(data);
  }
  getHello(): string {
    return 'Hello World!';
  }

  getAllProducts() {
    return this.products;
  }
}
