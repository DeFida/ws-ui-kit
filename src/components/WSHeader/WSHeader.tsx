import React, { FC, ReactNode } from 'react';

import styles from './WSHeader.module.scss';
import WSImage from '../WSImage/WSImage';

interface WSHeaderProps {
    children?: ReactNode;
    className?: string;
    logo?: any;
    onLogoClick?: () => void;
    buttons?: ReactNode;
}


const WSHeader: FC<WSHeaderProps> = ({children, className, onLogoClick, buttons, logo='https://www.weskill.kz/_next/static/media/weskill_logo.5af2785e.svg' }) => {

    const componentClassName = `${styles.WSHeader} ${className}`;

    return (
        <div className={`${componentClassName}`}>
            <WSImage height={0} width={0} alt='logo' src={logo} onClick={onLogoClick} className={styles.WSHeader__logo} />
            <div className={`${styles.WSHeader__buttons}`}>
                {buttons}
            </div>
        </div>
    );
};

export default WSHeader;