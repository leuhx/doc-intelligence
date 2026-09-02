import { Test, TestingModule } from '@nestjs/testing';
import { DocumentAttributeService } from './document-attribute.service.js';

describe('DocumentAttributeService', () => {
  let service: DocumentAttributeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentAttributeService],
    }).compile();

    service = module.get<DocumentAttributeService>(DocumentAttributeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
