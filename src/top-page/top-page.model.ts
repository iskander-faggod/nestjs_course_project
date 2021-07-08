import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageModel extends Base {
}

export class HhData {
	@prop()
	count: number;

	@prop()
	juniorSalary: number;

	@prop()
	middleSalary: number;

	@prop()
	seniorSalary: number;
}

export class TopPageAdvantage {
	@prop()
	title: string;

	@prop()
	description: string;
}

export class TopPageModel extends TimeStamps {
	@prop({ enum: TopLevelCategory, type: () => Number })
	firstLevelCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop()
	title: string;

	@prop({ unique: true })
	alias: string;

	@prop()
	category: string;

	@prop()
	hh?: HhData;

	@prop({ type: () => TopPageAdvantage })
	advantages: TopPageAdvantage[];

	@prop()
	seoText: string;

	@prop({ type: () => [String] })
	tags: string[];

	@prop()
	tagsTitle: string;

}
