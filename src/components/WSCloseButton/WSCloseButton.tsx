import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './WSCloseButton.module.scss';
import WSImage from '../WSImage/WSImage';

interface WSCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    closeImage: string;
    className?: string;
}

const WSCloseButton: FC<WSCloseButtonProps> = ({ className='', closeImage = '', ...props }) => {

    const componentClassName = `${styles.WSCloseButton} ${className}`;

    return (
        <button className={componentClassName} {...props}><WSImage src={closeImage} alt='close' width={40} height={40} className={`${styles.closeImage}`} /></button>    
    );
};

export default WSCloseButton;