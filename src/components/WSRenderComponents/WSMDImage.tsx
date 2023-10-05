import React from "react";
import WSImage from "../WSImage/WSImage";

import styles from './WSMDStyles.module.scss';

export interface ImageBlockProps {
    src?: string;
    alt?: string;
    openPopup: (src: string) => void;
}

const WSMDImage: React.FC<ImageBlockProps> = ({ src, alt, openPopup }) => {

    if (src && alt) {
        return <WSImage src={src} alt={alt} width={700} caption={alt} height={400} className={`${styles.lessonImage}`} onPopupOpen={() => openPopup(src)} /> 
    }
    return <img src={src} alt={alt} width={700} height={400} /> 
    
}

export default WSMDImage;