import React from 'react';
interface WSImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    style?: object;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}
declare const WSImage: React.FC<WSImageProps>;
export default WSImage;
