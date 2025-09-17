import React from 'react';

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'green' | 'icon';
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'onClick'>;

const variants: Record<string, string> = {
  green:
    'px-4 bg-[var(--global-green)] rounded-lg text-base text-white hover:bg-[#008a3c]',
  icon: ' w-[40px] h-[40px] flex items-center justify-center text-2xl hover:bg-[rgba(227,227,227,0.16)]',
};

export const Button = <T extends React.ElementType = 'button'>({
  as,
  onClick,
  children,
  variant = 'green',
  className,
  ...rest
}: ButtonProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      onClick={onClick}
      className={`duration-300 rounded-sm cursor-pointer ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
