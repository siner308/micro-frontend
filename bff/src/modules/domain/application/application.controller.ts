import { Controller, Get } from '@nestjs/common';
import { ApplicationService } from './application.service';
import Application from './application.entity';

@Controller('application')
export class ApplicationController {
  constructor(private readonly service: ApplicationService) {}

  @Get('/')
  async getApplications(): Promise<Application[]> {
    return this.service.getApplications();
  }
}
