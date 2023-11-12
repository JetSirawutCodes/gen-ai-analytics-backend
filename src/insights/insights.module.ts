import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { InsightsController } from './controller/insights/insights.controller';
import { InsightsService } from './services/insights/insights.service';
import { FakeAuthMiddleware } from './middleware/fake-auth/fake-auth.middleware';

@Module({
  controllers: [InsightsController],
  providers: [InsightsService],
})
export class InsightsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FakeAuthMiddleware).forRoutes('insights');
  }
}
