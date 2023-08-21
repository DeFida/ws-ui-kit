import React from 'react';
interface WSImageProps {
    src: string;
    alt: string;
    width: number;
    className?: string;
    height: number;
    style?: object;
}
declare const WSImage: React.FC<WSImageProps>;
export default WSImage;
