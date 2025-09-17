import { socials } from './config/socials.ts';
import { Svg } from '../../ui/Svg/Svg.tsx';

type SocialsProps = {
    className?: string;
};

export const Socials = ({ className }: SocialsProps) => {
    return (
        <div className={`grid grid-cols-4 gap-4 w-fit ${className}`}>
            {socials.map((item, i) => (
                <a
                    key={i}
                    className="flex items-center opacity-85 hover:opacity-100 w-[32px] h-[29px]"
                    href={item.url}
                >
                    <Svg
                        className="fill-[var(--global-black-60)]"
                        url={item.svg}
                    />
                </a>
            ))}
        </div>
    );
};
