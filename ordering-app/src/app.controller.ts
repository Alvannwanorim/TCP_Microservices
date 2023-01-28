import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrder } from './dto/create-oder.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  public createOrders(@Body() createOrders: CreateOrder) {
    return this.appService.createOrders(createOrders);
  }
}
