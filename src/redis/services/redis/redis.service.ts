/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';

@Injectable()
export class RedisService {
  private readonly client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

  async sendMessage(channel: string, message: any): Promise<void> {
    await this.client.emit(channel, message).toPromise();
  }
}
