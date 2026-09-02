import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentAttributeDto } from './create-document-attribute.dto.js';

export class UpdateDocumentAttributeDto extends PartialType(CreateDocumentAttributeDto) {}
