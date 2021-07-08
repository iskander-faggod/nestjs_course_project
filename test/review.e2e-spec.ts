import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from '../src/review/DTO/review.dto';
import { Types, disconnect } from 'mongoose';
import { create } from 'domain';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
	name: 'Test', title: 'Заголовок', description: 'Описание', rating: 5, productId: productId
};

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let createdId: string;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/review/create (GET)', async (done) => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDto)
			.expect(201)
			.then(({ body }: request.Response) => {
				createdId = body._id;
				expect(createdId).toBeDefined();
				done();
			});
	});

	it('/review/:id (DELETE)', () => {
		return request(app.getHttpServer())
			.delete('/review/' + createdId)
			.expect(200);
	});

	// it('/review/byProduct/:productId (GET)', async (done) => {
	// 	return request(app.getHttpServer())
	// 		.get('/review/byProduct/' + productId)
	// 		.expect(200)
	// 		.then(({body}:request.Response) => {
	// 				expect(body.length).toBe(10);
	// 				done();
	// 	})
	// });

	afterAll(() => {
		disconnect();
	});
});
