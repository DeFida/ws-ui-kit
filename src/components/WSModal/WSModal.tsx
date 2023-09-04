import React, { FC } from 'react';

import styles from './WSModal.module.scss';
import WSHeading from '../WSHeading/WSHeading';
import WSParagraph from '../WSParagraph/WSParagraph';
import WSCloseButton from '../WSCloseButton/WSCloseButton';

interface WSModal {
    message: string;
    onClose: () => void;
}

const WSModal: FC<WSModal> = ({message, onClose}) => {
    return (
        <div className={`${styles.WSModal}`}>
            <WSCloseButton dark onClick={onClose} className={`${styles.close}`} />
            <WSParagraph style={{margin: 0}}>{message}</WSParagraph>
        </div>
    );
};

export default WSModal;