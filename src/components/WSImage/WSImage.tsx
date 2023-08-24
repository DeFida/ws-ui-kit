import React, { useState, useEffect } from 'react';
import styles from './WSImage.module.scss';

interface WSImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: object;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const WSImage: React.FC<WSImageProps> = ({ src, alt, width, objectFit='cover', height, className='', style, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return (
    <div style={{ width, height, position: 'relative', margin: 0, padding: 0 }}>
      <img
        src={src}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s', objectFit, ...style }}
        className={`${styles.WSImage} ${className}`}
        width={width}
        height={height}
        {...props}
      />
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default WSImage;
