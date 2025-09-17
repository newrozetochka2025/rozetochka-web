import type { CategoryInfo } from './CategoryInfo.ts';
import type { BannerInfo } from './BannerInfo.ts';
import type { ProductInfo } from '../../../entities/product/types/ProductInfo.ts';

export type HomePageData = {
    categories: CategoryInfo[];
    banners: BannerInfo[];
    recommendProducts: ProductInfo[];
    bestProducts: ProductInfo[];
};
