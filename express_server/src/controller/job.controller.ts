import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { JobService } from '../service/job.service';
import { Job } from '../model/job.model';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Job> {
    return this.jobService.findOne(id);
  }

  @Post()
  create(@Body() jobData: Job): Promise<Job> {
    return this.jobService.create(jobData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobService.update(id, jobData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.jobService.delete(id);
  }
}
