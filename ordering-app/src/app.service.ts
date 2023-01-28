import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrder } from './dto/create-oder.dto';
import { CreateOrderEvent } from './dto/events/create-oder.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
    @Inject('PRODUCTS') private readonly productsClient: ClientProxy,
  ) {}
  private readonly orders: any[] = [];

  createOrders(createOrders: CreateOrder) {
    this.orders.push(createOrders);
    this.analyticsClient.emit(
      'order_create',
      new CreateOrderEvent(createOrders.name),
    );
    this.productsClient.emit(
      'order_create',
      new CreateOrderEvent(createOrders.name),
    );
    return createOrders;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
