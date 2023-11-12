import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FakeAuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Fake Auth - User Passed');
    next();
  }
}
