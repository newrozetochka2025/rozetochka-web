import { BaseCarousel } from './BaseCarousel';
import { type JSX, useRef, useState } from 'react';

type PagesCarouselProps<T> = {
    items: T[];
    renderItem: (item: T) => JSX.Element;
    slidesToShow?: number;
    slidesToScroll?: number;
    className?: string;
};

export const PagesCarousel = <T,>({
    items,
    renderItem,
    slidesToShow = 6,
    slidesToScroll = 6,
    className,
}: PagesCarouselProps<T>) => {
    const carouselRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(items.length / slidesToShow);

    const isPrevVisible = currentPage > 0;
    const isNextVisible = currentPage < totalPages - 1;

    const dots = (
        <div className="flex mt-2">
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    type="button"
                    key={i}
                    onClick={() => carouselRef.current?.goTo(i * slidesToShow)}
                    className={`h-[2px] flex-1 transition-colors duration-300 cursor-pointer ${
                        currentPage === i
                            ? 'bg-[var(--global-black-40)]'
                            : 'bg-[var(--global-black-5)]'
                    }`}
                />
            ))}
        </div>
    );

    return (
        <BaseCarousel
            carouselRef={carouselRef}
            items={items}
            renderItem={renderItem}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            infinite={false}
            dots={dots}
            afterChange={(firstItemIndex) =>
                setCurrentPage(Math.floor(firstItemIndex / slidesToShow))
            }
            isNextVisible={isNextVisible}
            isPrevVisible={isPrevVisible}
            className={className}
        />
    );
};
