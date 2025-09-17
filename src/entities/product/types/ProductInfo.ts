export type ProductInfo = {
  id: string;
  title: string;
  img: string;
  href: string;
  price: number;
  discountPrice?: number;
  isInWishlist: boolean;
};
