import React, { FC, HTMLProps } from 'react';
import styles from './WSParagraph.module.scss';

interface WSParagraphProps extends HTMLProps<HTMLParagraphElement> {
    className?: string;
    article?: boolean;
}

const WSParagraph: FC<WSParagraphProps> = ({ children, className = '', article=false, ...props }) => {

    let componentClassName = `${styles.WSParagraph} ${article ? styles.WSArticleParagraph : ''} ${className}`;
    return (
        <p className={componentClassName} {...props}>{children}</p>
    )
}

export default WSParagraph;