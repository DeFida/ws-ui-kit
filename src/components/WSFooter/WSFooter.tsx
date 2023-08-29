import React, { FC, ReactNode } from 'react';

import styles from './WSFooter.module.scss';

interface WSFooterProps {
    children?: ReactNode;
    className?: string;
    regardingWeskill?: ReactNode;
    courses?: ReactNode;
    contacts?: ReactNode;
}


const WSFooter: FC<WSFooterProps> = ({children, className, regardingWeskill, courses, contacts }) => {

    const componentClassName = `${styles.WSFooter} ${className}`;

    return (
        <div className={`${componentClassName}`}>
            <div className={`${styles.WSFooter__wrapper}`}>
                {regardingWeskill}
            </div>
            <div className={`${styles.WSFooter__wrapper}`}>
                {courses}
            </div>
            <div className={`${styles.WSFooter__wrapper}`}>
                {contacts}
            </div>
            
            
        </div>
    );
};

export default WSFooter;