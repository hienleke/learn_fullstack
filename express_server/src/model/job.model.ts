import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'jobs', // Explicitly set table name
  timestamps: true,  // Enable createdAt and updatedAt fields
})
export class Job extends Model<Job> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'job_title', // Map the `title` property to the database column `job_title`
    validate: { notEmpty: true }, // Ensure it's not empty
  })
  title!: string; // Use non-null assertion to indicate that it cannot be null

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    field: 'job_description', // Map to `job_description` in the database
    validate: { notEmpty: true },
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'company_name', // Map to `company_name`
    validate: { notEmpty: true },
  })
  company!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'job_location', // Map to `job_location`
    validate: { notEmpty: true },
  })
  location!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'job_salary', // Map to `job_salary`
    validate: { min: 0 }, // Ensure salary is positive
  })
  salary?: number; // Allow `salary` to be nullable, using `?` for optional field
}
