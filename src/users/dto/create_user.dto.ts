// update-data.dto.ts
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateDataDto {
  @IsOptional()
  @IsString()
  corner?: string;

  @IsOptional()
  @IsNumber()
  long?: number;

  @IsOptional()
  @IsNumber()
  lat?: number;

    @IsOptional()
  @IsString()
  lot?: string;
}
