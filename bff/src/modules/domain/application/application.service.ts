import { Injectable } from '@nestjs/common';
import { ApplicationRepo } from './repo/application.repo';

@Injectable()
export class ApplicationService {
  constructor(private readonly repository: ApplicationRepo) {}
}
