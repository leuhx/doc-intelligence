import { IsNotEmpty, IsString } from 'class-validator';

export class DocumentType {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
