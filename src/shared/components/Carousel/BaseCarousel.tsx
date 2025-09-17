import { CarouselButton } from './components/CarouselButton';
import { Carousel as AntCarousel } from 'antd';
import { type JSX } from 'react';

export type BaseCarouselProps<T> = {
    carouselRef: any;
    items: T[];
    renderItem: (item: T) => JSX.Element;
    slidesToShow?: number;
    slidesToScroll?: number;
    infinite?: boolean;
    afterChange?: (firstItemIndex: number) => void;
    dots?: React.ReactNode;
    isPrevVisible?: boolean;
    isNextVisible?: boolean;
    className?: string;
};

export const BaseCarousel = <T,>({
    carouselRef,
    items,
    renderItem,
    slidesToShow = 1,
    slidesToScroll = 1,
    infinite = true,
    afterChange,
    dots,
    isPrevVisible = true,
    isNextVisible = true,
    className,
}: BaseCarouselProps<T>) => {
    return (
        <div className={`relative w-full ${className ?? ''}`}>
            <CarouselButton
                onClick={() => carouselRef.current?.prev()}
                svg="#icon-angle-left"
                type="left"
                className={`transition-opacity duration-300 ${
                    isPrevVisible
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            />
            <CarouselButton
                onClick={() => carouselRef.current?.next()}
                svg="#icon-angle-left"
                type="right"
                className={`transition-opacity duration-300 ${
                    isNextVisible
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
                classNameSvg="rotate-180"
            />

            <AntCarousel
                ref={carouselRef}
                arrows={false}
                dots={false}
                infinite={infinite}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                afterChange={afterChange}
            >
                {items.map((item) => (
                    <>{renderItem(item)}</>
                ))}
            </AntCarousel>

            {dots && <>{dots}</>}
        </div>
    );
};
