import React, { FC } from 'react';

import styles from './WSModal.module.scss';
import WSHeading from '../WSHeading/WSHeading';
import WSParagraph from '../WSParagraph/WSParagraph';
import WSCloseButton from '../WSCloseButton/WSCloseButton';

interface WSModal {
    message: string;
    title: string;
    onClose: () => void;
}

const WSModal: FC<WSModal> = ({message, title, onClose}) => {
    return (
        <div className={`${styles.WSModal}`}>
            <WSCloseButton dark onClick={onClose} />
            <WSHeading type='h1'>{title}</WSHeading>
            <WSParagraph>{message}</WSParagraph>
        </div>
    );
};

export default WSModal;