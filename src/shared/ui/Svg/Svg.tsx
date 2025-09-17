import { useEffect, useState } from 'react';
import sprite from '../../../assets/sprite/sprite.svg';

type SvgProps = {
  url: string;
  width?: number;
  height?: number;
  className?: string;
};

export const Svg = ({ url, width = 24, height = 24, className }: SvgProps) => {
  const [inner, setInner] = useState('');

  useEffect(() => {
    if (url.startsWith('#')) {
      setInner(`<use href="${sprite}${url}"></use>`);
    } else {
      fetch(url)
        .then((r) => r.text())
        .then((text) => {
          const match = text.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
          setInner(match ? match[1] : text);
        });
    }
  }, [url]);

  return (
    <svg
      width={width}
      height={height}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
};
