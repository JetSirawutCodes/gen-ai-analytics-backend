import { Injectable } from '@nestjs/common';
import { AnalyzeInsightRangeType } from '../../../utils/types/analyzeInsightRangeType';
// import { Redis } -- import the messagebroker and use it

@Injectable()
export class InsightsService {
  analyzeInsightRange(insightRange: AnalyzeInsightRangeType) {
    // await Message Broker for data, waiting for data to process
    const respFromMessageBroker = 'Question data received for ' + insightRange;
    //mocking logical stuff to analyze data here -- console log instead
    console.log(respFromMessageBroker);

    const fakeAnalyzedInsights = {
      question_received: 20,
      correct_answer: 18,
      incorrect_answer: 2,
    };
    return fakeAnalyzedInsights;
  }
}
