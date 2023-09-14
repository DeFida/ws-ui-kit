import React, { FC } from 'react';
import styles from './WSEntityCard.module.scss';
import fontsStyles from '../../styles/fonts.module.scss';
import WSHeading from '../WSHeading/WSHeading';
import WSParagraph from '../WSParagraph/WSParagraph';

interface WSEntityCardProps {
    entity: any;
    onClick: () => void;
    type: string;
}

const WSEntityCard: FC<WSEntityCardProps> = ({entity, onClick, type}) => {
    return  (
        <div className={`${styles.element}`} onClick={onClick}>
            <WSHeading type='h2' className={`${fontsStyles.regular} ${styles.name}`}>Название: {entity.name}</WSHeading>
            <WSParagraph className={`${styles.id}`}>{type} ID: {entity._id}</WSParagraph>
        </div>
    )
};

export default WSEntityCard;