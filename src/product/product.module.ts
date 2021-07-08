import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from '../auth/auth.model';
import { ReviewModel } from '../review/review.model';


@Module({
	controllers: [ProductController],
	imports: [
		TypegooseModule.forFeature([{
			typegooseClass: ReviewModel,
			schemaOptions: {
				collection: 'Product'
			}
		}])
	]
})
export class ProductModule {
}
