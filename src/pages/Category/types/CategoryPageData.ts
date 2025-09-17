import type { Pagination } from '../../../shared/types/Pagination.ts';
import type { Breadcrumb } from '../../../shared/types/Breadcrumb.ts';
import type { CategoryInfo } from '../../HomePage/types/CategoryInfo.ts';
import type { ProductInfo } from '../../../entities/product/types/ProductInfo.ts';
import type { FilterInfo } from './FilterInfo.ts';

export type CategoryPageData = {
  pagination: Pagination;
  breadcrumbs: Breadcrumb[];
  title: string;
  subCategories: CategoryInfo[];
  total: number;
  products: ProductInfo[];
  seeAlso: ProductInfo[];
  filters: FilterInfo;
};
