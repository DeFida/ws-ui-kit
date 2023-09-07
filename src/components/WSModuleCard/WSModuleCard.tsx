import React, { FC } from 'react';

import styles from './WSModuleCard.module.scss';
import WSImage from '../WSImage/WSImage';
import WSHeading from '../WSHeading/WSHeading';

import fontsStyles from '../../styles/fonts.module.scss';

type ModuleType = {
    _id: string;
    name: string;
    duration: number;
    previewImage: string;
}

interface ModuleCardProp {
    module: ModuleType;
    className?: string;
    onClick: () => void;
}

const WSModuleCard: FC<ModuleCardProp> = ({module, className, onClick, ...props}) => {
    const componentClassnames = `${styles.WSModuleCard} ${className}`

    return (
        <div className={componentClassnames} onClick={onClick} {...props}>
            <WSImage src={module.previewImage} alt='previewImageModule' width={288} height={300} className={`${styles.cardImage}`}/>
            <WSHeading type='h2' className={`${fontsStyles.regular} ${styles.cardName}`}>{module.name}</WSHeading>
        </div>
    );
};

export default WSModuleCard;