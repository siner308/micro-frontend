import { Controller, Get, Param } from '@nestjs/common';
import { DeploymentService } from './deployment.service';

@Controller('deployment')
export class DeploymentController {
  constructor(private readonly service: DeploymentService) {}

  @Get('/:environmentName')
  async getByEnvironmentName(@Param() params: any) {
    return this.service.getByEnvironmentName(params.environmentName);
  }
}
