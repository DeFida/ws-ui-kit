import React, { FC, useState } from 'react';

import styles from './WSCourseCard.module.scss';

import WSHeading from '../WSHeading/WSHeading';
import WSParagraph from '../WSParagraph/WSParagraph';
import fontsStyles from '../../styles/fonts.module.scss';

type CourseType = {
    _id: string;
    name: string;
    previewImage: string;
    previewImageOnHover: string;
    previewDescription: string;
}

interface CourseProp {
    course: CourseType;
    className?: string;
    link: string;
}

const WSCourseCard: FC<CourseProp> = ({course, className, link, ...props}) => {
    const componentClassnames = `${styles.WSCourseCard} ${className}`

    return (
        <a href={link} className={`${styles.wrapper}`}>
            <div className={componentClassnames}>
                <WSHeading type='h2' className={`${fontsStyles.regular} ${styles.name}`}>{course.name}</WSHeading>
                <div className={`${styles.overlay}`}></div>

                <img src={course.previewImage} alt='preview' className={`${styles.cardImage}`} />
                <img src={course.previewImageOnHover} alt='preview' className={`${styles.cardImageOnHover}`} />
                <WSParagraph className={`${styles.description}`}>{course.previewDescription}</WSParagraph>
            </div>
        </a>
        
    );
};

export default WSCourseCard;