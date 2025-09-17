import { Svg } from '../../../ui/Svg/Svg.tsx';

type CarouselButtonProps = {
    type: 'left' | 'right';
    svg: string;
    onClick?: () => void;
    className?: string;
    classNameSvg?: string;
};

export const CarouselButton = ({
    type,
    svg,
    onClick,
    className,
    classNameSvg,
}: CarouselButtonProps) => {
    return (
        <button
            className={`absolute top-1/2 -translate-y-1/2 z-20 bg-[var(--global-black-5)] p-2 rounded-full hover:bg-[var(--global-black-10)] cursor-pointer ${type === 'left' ? 'left-[16px]' : 'right-[16px]'} ${className}`}
            onClick={onClick}
        >
            <Svg url={svg} className={`fill-[var(--global-black-60)] ${classNameSvg}`} />
        </button>
    );
};
