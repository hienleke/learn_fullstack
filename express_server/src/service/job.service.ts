import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Job } from '../model/job.model';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job) private readonly jobModel: typeof Job) {}

  // Get all jobs
  async findAll(): Promise<Job[]> {
    return this.jobModel.findAll();
  }

  // Get a single job by ID
  async findOne(id: number): Promise<Job> {
    const job = await this.jobModel.findByPk(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  // Create a new job
  async create(jobData: Job): Promise<Job> {
    return this.jobModel.create(jobData);
  }
  // Update an existing job by ID
  async update(id: number, jobData: Partial<Job>): Promise<Job> {
    const job = await this.findOne(id); // Reuse findOne for error handling
    return job.update(jobData);
  }

  // Delete a job by ID
  async delete(id: number): Promise<void> {
    const job = await this.findOne(id); // Reuse findOne for error handling
    await job.destroy();
  }
}
