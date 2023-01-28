import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateOrderEvent } from './events/create-order.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order_create')
  handleOrderEvent(data: CreateOrderEvent) {
    console.log('products', data);
    this.appService.saveProduct(data);
  }

  @MessagePattern({ cmd: 'get_products' })
  getProducts() {
    return this.appService.getAllProducts();
  }
}
