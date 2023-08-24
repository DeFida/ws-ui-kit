import React, { FC, ReactNode } from 'react';

import styles from './WSHeader.module.scss';
import WSImage from '../WSImage/WSImage';

interface WSHeaderProps {
    children?: ReactNode;
    className?: string;
    logo?: any;
}


const WSHeader: FC<WSHeaderProps> = ({children, className, logo }) => {

    const componentClassName = `${styles.WSHeader} ${className}`;

    return (
        <div className={`${componentClassName}`}>
            <WSImage height={40} width={40} alt='logo' src={logo} />
        </div>
    );
};

export default WSHeader;