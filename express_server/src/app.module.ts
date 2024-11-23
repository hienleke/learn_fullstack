import { Model } from 'sequelize-typescript';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {  JobController } from './controller/job.controller';
import { AppService } from './service/app.service';
import { Job } from './model/job.model'


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'http://sql12.freesqldatabase.com/',          // Your MySQL host
      port: 3306,                 // MySQL default port
      username: 'sql12746816',           // MySQL username
      password: 'Eq5y6kaDRa',   // MySQL password
      database: 'sql12746816',   // Your MySQL database
      models: [Job],             // Define your models here
      autoLoadModels: true,       // Automatically load models
      synchronize: true,          // Automatically synchronize the database (useful in dev)
    }),
    SequelizeModule.forFeature([Job]),  // Register User model
  ],
  controllers: [JobController],
  providers: [AppService],
})
export class AppModule {}
