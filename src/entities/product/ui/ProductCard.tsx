import { Svg } from '../../../shared/ui/Svg/Svg.tsx';
import type { ProductInfo } from '../types/ProductInfo.ts';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  product: ProductInfo;
  className?: string;
  classNameTitle?: string;
};

export const ProductCard = ({ product, className, classNameTitle }: ProductCardProps) => {
  return (
    <div
      className={`p-2 border-r-1 border-b-1 border-[var(--global-black-10)] ${className}`}
    >
      <div className="relative flex flex-col gap-2">
        <button className="absolute z-3 w-8 h-8 bg-[#ffffffb3] hover:bg-[var(--global-green-5)] rounded-sm top-0 right-0 cursor-pointer">
          <Svg
            url={product.isInWishlist ? 'icon-heart-filled' : '#icon-heart-empty'}
            className="m-auto fill-[var(--global-yellow)]"
          />
        </button>
        <Link to={`/product/${product.href}`} className="w-full flex items-center">
          <img className="w-full aspect-square object-contain" src={product.img} alt="" />
        </Link>
        <Link
          to={`/product/${product.href}`}
          className={`line-clamp-2 hover:!underline hover:text-[var(--global-red)] ${classNameTitle}`}
        >
          {product.title}
        </Link>
        <div className="flex items-center justify-between">
          <div>
            {product.discountPrice && (
              <div className="mb-1 text-[var(--global-black-60)] line-through leading-none">
                184 <span className="ml-1">₴</span>
              </div>
            )}
            <div
              className={`text-xl font-bold leading-none ${product.discountPrice && 'text-[var(--global-red)]'}`}
            >
              598 <span className="ml-1">₴</span>
            </div>
          </div>
          <button className="w-8 h-8 cursor-pointer hover:bg-[var(--global-green-5)]">
            <Svg url="#icon-basket" className="m-auto fill-[var(--global-green)]" />
            {/*#icon-basket-filled*/}
          </button>
        </div>
      </div>
    </div>
  );
};
