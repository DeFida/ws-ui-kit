import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './WSCloseButton.module.scss';

interface WSCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    dark?: boolean;
    className?: string;
}

const WSCloseButton: FC<WSCloseButtonProps> = ({ className='', dark = false, ...props }) => {

    const componentClassName = `${styles.WSCloseButton} ${dark ? styles.WSCloseButtonDark : '' } ${className}`;

    return (
        <button className={componentClassName} {...props}></button>
    );
};

export default WSCloseButton;