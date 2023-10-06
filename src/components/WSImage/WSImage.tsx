import React, { useState, useEffect } from 'react';
import styles from './WSImage.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';

interface WSImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  caption?: string;
  onPopupOpen?: (src: string) => void;
  style?: object;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

const WSImage: React.FC<WSImageProps> = ({ src, alt, onPopupOpen, caption, width, objectFit='cover', height, className='', style, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  }

  return (
      <>
        <img
        src={src}
        alt={alt}
        style={{ display: loaded ? 'flex' : 'none', objectFit, ...style }}
        className={`${styles.WSImage} ${onPopupOpen && styles.clickable} ${className}`}
        width={width}
        onLoad={handleLoad}
        height={height}
        onClick={onPopupOpen ? () => onPopupOpen(src) : () => {}}
        {...props}
      />
      {caption && <p style={{margin: '.5rem 0 1rem'}}><span className={`${styles.caption}`} >{caption}</span></p>}
      {
        !loaded &&  <div className={`${styles.placeholder}`}>
                      <div className={styles.loadingSpinner}></div>
                    </div>
      }
      </>
  );
};

export default WSImage;
