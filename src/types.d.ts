import { HomePgImgPack } from './lib/__generated__/graphql';

export interface IGetHomePgImgs {
	getHomePgImgs: HomePgImgPack;
}

export interface IHomeProps {
	data: IGetHomePgImgs;
	loading: boolean;
	error: any;
}

export interface ICardProps {
 title: string;
 description: string;
 urlEndpoint: string;
 imagePath: string;
}
