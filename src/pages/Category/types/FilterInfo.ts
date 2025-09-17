export type FilterInfo = {
  brands: FilterBrand[];
  price: FilterPrice;
  groups: FilterGroup[];
};

export type FilterBrand = {
  id: string;
  title: string;
  count: number;
  slug: string;
};

export type FilterPrice = {
  min: number;
  max: number;
};

export type FilterGroup = {
  title: string;
  variants: FilterVariant[];
};

export type FilterVariant = {
  title: string;
  count: number;
};
