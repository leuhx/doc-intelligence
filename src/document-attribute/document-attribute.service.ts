import { Injectable } from '@nestjs/common';
import { CreateDocumentAttributeDto } from './dto/create-document-attribute.dto.js';
import { UpdateDocumentAttributeDto } from './dto/update-document-attribute.dto.js';

@Injectable()
export class DocumentAttributeService {
  create(createDocumentAttributeDto: CreateDocumentAttributeDto) {
    return 'This action adds a new documentAttribute';
  }

  findAll() {
    return `This action returns all documentAttribute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentAttribute`;
  }

  update(id: number, updateDocumentAttributeDto: UpdateDocumentAttributeDto) {
    return `This action updates a #${id} documentAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentAttribute`;
  }
}
