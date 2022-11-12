import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post() async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOrder(request);
  }
}
