import React, { FC, useState } from 'react';

import styles from './WSCourseCard.module.scss';

import WSHeading from '../WSHeading/WSHeading';
import WSParagraph from '../WSParagraph/WSParagraph';
import WSImage from '../WSImage/WSImage';
import fontsStyles from '../../styles/fonts.module.scss';

interface CourseProp {
    id: string;
    name: string;
    linkName: string;
    previewImage: string;
    previewImageOnHover: string;
    previewDescription: string;
    className?: string;
}

const WSCourseCard: FC<CourseProp> = ({id, name, linkName, previewDescription, className, previewImage, previewImageOnHover, ...props}) => {
    const componentClassnames = `${styles.WSCourseCard} ${className}`

    return (
        <a href={`/courses/${linkName}`} className={componentClassnames}>
            <WSHeading type='h2' className={`${fontsStyles.regular} ${styles.cardTitle}`}>{name}</WSHeading>
            <WSImage src={previewImage} width={0} height={0} className={`${styles.cardImage}`} alt='hoverImage' />
            <WSImage src={previewImageOnHover} width={0} height={0} className={`${styles.onHoverCardImage}`} alt='hoverImage' />
            
            <WSParagraph className={`${styles.description}`}>{previewDescription}</WSParagraph>
        </a>
    );
};

export default WSCourseCard;