import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './WSCloseButton.module.scss';

interface WSCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    dark?: boolean;
    className?: string;
}

const WSCloseButton: FC<WSCloseButtonProps> = ({ className='', dark = false, ...props }) => {

    const componentClassName = `${styles.WSCloseButton} ${dark ? styles.WSCloseButtonDark : '' } ${className}`;

    return (
        <button className={componentClassName} style={ dark ? {backgroundImage: 'url("../../../images/closeButton_dark.svg")'} : {backgroundImage: 'url("../../../images/closeButton_light.svg")'} } {...props}></button>
    );
};

export default WSCloseButton;