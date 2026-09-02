import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class Document {
  //criar validator para todos os campos
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  documentTypeId?: string;

  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  fileUrl: string;

  @IsString()
  mimeType: string;

  @IsJSON()
  extractedData: any;
}
