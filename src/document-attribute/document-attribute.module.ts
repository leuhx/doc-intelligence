import { Module } from '@nestjs/common';
import { DocumentAttributeService } from './document-attribute.service.js';
import { DocumentAttributeController } from './document-attribute.controller.js';

@Module({
  controllers: [DocumentAttributeController],
  providers: [DocumentAttributeService],
})
export class DocumentAttributeModule {}
