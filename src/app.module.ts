import { Module } from '@nestjs/common';
import { InsightsModule } from './insights/insights.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [InsightsModule, RedisModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
