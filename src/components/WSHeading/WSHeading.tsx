import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import styles from './WSHeading.module.scss';

type HeadingType = 'h1' | 'h2';

interface WSHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children?: ReactNode;
    type: HeadingType;
    className?: string;
}

const WSHeading: FC<WSHeadingProps> = ({ children, className = '', type = "h1", ...props }) => {
    let componentClassName = `${className}`;

    return (
        <>
        {
            type === 'h1' 
            ? 
                <h1 className={`${styles.WSH1} ${componentClassName}`} {...props}>{children}</h1> 
            : 
                type === 'h2' 
                &&
                    <h2 className={`${styles.WSH2} ${componentClassName}`} {...props}>{children}</h2>
        }
        </>
    )
}

export default WSHeading