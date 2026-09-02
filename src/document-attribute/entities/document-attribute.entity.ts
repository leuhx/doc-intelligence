import { IsNotEmpty, IsString } from 'class-validator';

export class DocumentAttribute {
  @IsString()
  @IsNotEmpty()
  id: string;

  //add validator para todos os campos
  @IsString()
  documentTypeId: string;

  @IsString()
  @IsNotEmpty()
  label: string;
}
