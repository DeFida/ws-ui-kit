import React from "react";
export interface ImageBlockProps {
    src?: string;
    alt?: string;
    openPopup: (src: string) => void;
}
declare const WSMDImage: React.FC<ImageBlockProps>;
export default WSMDImage;
