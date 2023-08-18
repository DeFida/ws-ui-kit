import React, {FC} from 'react';
import styles from './WSButton.module.scss';

export interface WSButtonProps {
    children?: string;
    reversed?: boolean;
    action?: boolean;
    className?: string;
}

const WSButton: FC<WSButtonProps> = ({ children, className='', reversed = false, action = false, ...props }) => {
    let componentClassName = `${styles.WSRegularButton} ${className} ${action ? styles.action : ''} ${reversed ? action ? styles.actionReversed : styles.reversed : ''}`;
    
    return (
        <button className={componentClassName} {...props}>{children}</button>
    )
};

export default WSButton;