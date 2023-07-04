import { Controller } from '@nestjs/common';
import { VersionService } from './version.service';

@Controller('application')
export class VersionController {
  constructor(private readonly service: VersionService) {}
}
