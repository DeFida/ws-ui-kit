import React, { useState, useEffect } from 'react';
import styles from './WSImage.module.scss';

interface WSImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onPopupOpen?: (src: string) => void;
  style?: object;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const WSImage: React.FC<WSImageProps> = ({ src, alt, onPopupOpen = function(){}, width, objectFit='cover', height, className='', style, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
      <img
        src={src}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s', objectFit, ...style }}
        className={`${styles.WSImage} ${className}`}
        width={width}
        height={height}
        onClick={() => onPopupOpen(src)}
        {...props}
      />
  );
};

export default WSImage;
