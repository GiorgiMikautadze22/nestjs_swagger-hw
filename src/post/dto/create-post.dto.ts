import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreatePostDto {
  @ApiProperty({
    example: 'Post title',
    description: 'Post title',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Post content',
    description: 'Post content',
    required: true,
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    example: '<MONGO_ID>',
    description: 'User id',
    type: mongoose.Schema.Types.ObjectId,
  })
  @IsMongoId()
  user: mongoose.Schema.Types.ObjectId;
}
