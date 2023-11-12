/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty } from 'class-validator';
export class InsightByRange {
  @IsNotEmpty()
  assistantId: number;
  @IsDateString()
  startDate: string;
  @IsDateString()
  endDate: string;
}
