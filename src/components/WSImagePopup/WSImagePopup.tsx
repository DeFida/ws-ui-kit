import React, { FC } from 'react';
import styles from './WSImagePopup.module.scss';
import WSImage from '../WSImage/WSImage';
import WSCloseButton from '../WSCloseButton/WSCloseButton';

interface WSImagePopupProps {
    image: string;
    onClose: () => void;
    className?: string;
  }

const WSImagePopup: FC<WSImagePopupProps> = ({image, onClose, ...props }) => {
    return (
        <div className={`${styles.WSImagePopup}`} {...props}>
            <div className={`${styles.container}`}>
                <WSCloseButton onClick={onClose} dark className={styles.close}/>
                <WSImage src={image} alt='popupImage' width={100} height={100} className={`${styles.image}`} />
            </div>
        </div>
    );
};

export default WSImagePopup;