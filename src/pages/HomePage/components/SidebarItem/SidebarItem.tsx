import { Svg } from '../../../../shared/ui/Svg/Svg.tsx';

type SidebarItemProps = {
  svg: string;
  title: string;
  text?: string;
  className?: string;
  fullColor?: boolean;
};

export const SidebarItem = ({
  svg,
  title,
  text,
  className,
  fullColor,
}: SidebarItemProps) => (
  <div
    className={`flex items-center px-3 gap-2 min-h-10 cursor-pointer group ${className}`}
  >
    <Svg
      url={svg}
      className={`${fullColor ? 'fill-[var(--global-green)]' : 'fill-[var(--global-black-60)] group-hover:fill-[var(--global-green)]'}`}
    />
    <div>
      <div
        className={`${fullColor ? 'text-[var(--global-green)]' : 'group-hover:text-[var(--global-green)]'}`}
      >
        {title}
      </div>
      {text && (
        <div className="text-[var(--global-black-60)] text-xs overflow-hidden overflow-ellipsis">
          {text}
        </div>
      )}
    </div>
  </div>
);
