import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FindTopPageDto } from './DTO/top-page.dto';

@Controller('top-page')
export class TopPageController {

	@Post('create')
	async create(@Body() dto: Omit<FindTopPageDto, '_id'>) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string){

	}
}
