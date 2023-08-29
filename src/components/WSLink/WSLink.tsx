import React, { FC, HTMLProps } from 'react';
import styles from './WSLink.module.scss';

interface WSLinkProps extends HTMLProps<HTMLAnchorElement> {
    className?: string; 
}

const WSLink: FC<WSLinkProps> = ({ children, className = '', ...props }) => {

    let componentClassName = `${styles.WSLink} ${className}`;

    return (
        <a className={componentClassName} {...props}>{children}</a>
    )
}

export default WSLink;