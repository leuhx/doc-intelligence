import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DocumentModule } from './document/document.module.js';
import { DocumentTypeModule } from './document-type/document-type.module.js';
import { DocumentAttributeModule } from './document-attribute/document-attribute.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'doc-intelligence',
    }),
    DocumentModule,
    DocumentTypeModule,
    DocumentAttributeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
