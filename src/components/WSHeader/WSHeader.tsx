import React, { FC, ReactNode } from 'react';

import styles from './WSHeader.module.scss';
import WSImage from '../WSImage/WSImage';

interface WSHeaderProps {
    children?: ReactNode;
    className?: string;
    logo?: ReactNode;
    buttons?: ReactNode;
}


const WSHeader: FC<WSHeaderProps> = ({children, className, buttons, logo }) => {

    const componentClassName = `${styles.WSHeader} ${className}`;

    return (
        <div className={`${componentClassName}`}>
            {logo}
            <div className={`${styles.WSHeader__buttons}`}>
                {buttons}
            </div>
        </div>
    );
};

export default WSHeader;