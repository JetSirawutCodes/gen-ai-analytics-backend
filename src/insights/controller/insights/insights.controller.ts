import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InsightByRange } from '../../dtos/InsightByRange.dto';
import { InsightsService } from '../../services/insights/insights.service';
// import { Request, Response } from 'express';

@Controller('insights')
export class InsightsController {
  constructor(private insightService: InsightsService) {}

  @Get('/standard')
  getStandardInsights() {
    return { question_received: 10, correct_answer: 8, incorrect_answer: 2 };
  }

  @Get('/assistant/:assistantId')
  getInsightsByAssistantId(@Param('assistantId') assistantId: string) {
    // route - http://localhost:3000/insights/assistant/123
    // if we would do get by ID stuff
    const mockData = {
      msg: 'not actual in tests but just for demo purposes API is called',
    };
    return {
      assistantId,
      mockData,
    };
  }

  @Post('assistant/ByRange')
  @UsePipes(new ValidationPipe())
  insightByRange(@Body() insightRange: InsightByRange) {
    // route - http://localhost:3000/insights/assistant/ByRange
    //controller calls the corresponding service -> analyzeInsightRange
    const data = this.insightService.analyzeInsightRange(insightRange);
    return {
      insightRange,
      data,
    };
  }
}
