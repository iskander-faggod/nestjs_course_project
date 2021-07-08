import { Types } from 'mongoose';
import { IsNumber, IsString, Max, Min, MIN } from 'class-validator';

export class CreateReviewDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@Max(5)
	@Min(1, { message: 'Рейтинг не может быть меньше одного' })
	@IsNumber()
	rating: number;

	@IsString()
	productId: string;
}