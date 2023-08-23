import React from 'react';
interface WSImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width: number;
    className?: string;
    height: number;
    style?: object;
    objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}
declare const WSImage: React.FC<WSImageProps>;
export default WSImage;
