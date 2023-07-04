import { Controller } from '@nestjs/common';
import { EnvironmentService } from './environment.service';

@Controller('application')
export class EnvironmentController {
  constructor(private readonly service: EnvironmentService) {}
}
