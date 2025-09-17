import { BaseCarousel } from './BaseCarousel';
import { type JSX, useRef, useState } from 'react';

type SlidesCarouselProps<T> = {
    items: T[];
    renderItem: (item: T) => JSX.Element;
    slidesToShow?: number;
    slidesToScroll?: number;
    infinite?: boolean;
};

export const SlidesCarousel = <T,>({
    items,
    renderItem,
    slidesToShow = 1,
    slidesToScroll = 1,
    infinite = true,
}: SlidesCarouselProps<T>) => {
    const carouselRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(items.length / slidesToShow);

    const dots = (
        <div className="w-full absolute bottom-2 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    type="button"
                    key={i}
                    onClick={() => carouselRef.current?.goTo(i * slidesToShow)}
                    className={`w-[6px] h-[6px] transition-colors duration-300 rounded-full cursor-pointer ${
                        currentPage === i
                            ? 'bg-[var(--global-green)]'
                            : 'bg-[var(--global-black-20)]'
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
            infinite={infinite}
            dots={dots}
            afterChange={(firstItemIndex) =>
                setCurrentPage(Math.floor(firstItemIndex / slidesToShow))
            }
            className="mb-2"
        />
    );
};
