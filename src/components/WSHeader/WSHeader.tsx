import React, { FC, ReactNode } from 'react';

import styles from './WSHeader.module.scss';
import WSImage from '../WSImage/WSImage';
import WSButton from '../WSButton/WSButton';

interface WSHeaderProps {
    children?: ReactNode;
    className?: string;
    logo?: any;
    onLogoClick?: () => void;
}


const WSHeader: FC<WSHeaderProps> = ({children, className, onLogoClick, logo='https://www.weskill.kz/_next/static/media/weskill_logo.5af2785e.svg' }) => {

    const componentClassName = `${styles.WSHeader} ${className}`;

    return (
        <div className={`${componentClassName}`}>
            <WSImage height={0} width={0} alt='logo' src={logo} onClick={onLogoClick} className={styles.WSHeader__logo} />

            <div className={`${styles.WSHeader__buttons}`}>
                <WSButton reversed>Войти</WSButton>
                <WSButton reversed>Регистрация</WSButton>
            </div>
        </div>
    );
};

export default WSHeader;