import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentAttributeService } from './document-attribute.service.js';
import { CreateDocumentAttributeDto } from './dto/create-document-attribute.dto.js';
import { UpdateDocumentAttributeDto } from './dto/update-document-attribute.dto.js';

@Controller('document-attribute')
export class DocumentAttributeController {
  constructor(private readonly documentAttributeService: DocumentAttributeService) {}

  @Post()
  create(@Body() createDocumentAttributeDto: CreateDocumentAttributeDto) {
    return this.documentAttributeService.create(createDocumentAttributeDto);
  }

  @Get()
  findAll() {
    return this.documentAttributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentAttributeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentAttributeDto: UpdateDocumentAttributeDto) {
    return this.documentAttributeService.update(+id, updateDocumentAttributeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentAttributeService.remove(+id);
  }
}
