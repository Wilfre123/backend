// update-data.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class Lotdto {

  @IsOptional()
  @IsString()
  lot?: string;
}