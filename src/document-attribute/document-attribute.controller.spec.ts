import { Test, TestingModule } from '@nestjs/testing';
import { DocumentAttributeController } from './document-attribute.controller.js';
import { DocumentAttributeService } from './document-attribute.service.js';

describe('DocumentAttributeController', () => {
  let controller: DocumentAttributeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentAttributeController],
      providers: [DocumentAttributeService],
    }).compile();

    controller = module.get<DocumentAttributeController>(DocumentAttributeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
