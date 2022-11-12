import { Injectable, Logger } from '@nestjs/common';
import { CreateOrderRequest } from './dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(request: CreateOrderRequest) {
    return this.ordersRepository.create(request);
  }

  async findOrders() {
    return this.ordersRepository.find({});
  }
}
