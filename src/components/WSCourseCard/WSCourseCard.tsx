import React, { FC, useState } from 'react';

import styles from './WSCourseCard.module.scss';

import WSHeading from '../WSHeading/WSHeading';
import WSParagraph from '../WSParagraph/WSParagraph';
import WSImage from '../WSImage/WSImage';
import fontsStyles from '../../styles/fonts.module.scss';

type CourseType = {
    id: string;
    name: string;
    linkName: string;
    previewImage: string;
    previewImageOnHover: string;
    previewDescription: string;
}

interface CourseProp {
    course: CourseType;
    className?: string;
}

const WSCourseCard: FC<CourseProp> = ({course, className, ...props}) => {
    const componentClassnames = `${styles.WSCourseCard} ${className}`

    return (
        <a href={`/courses/${course.linkName}`} className={componentClassnames}>
            <WSHeading type='h2' className={`${fontsStyles.regular} ${styles.cardTitle}`}>{course.name}</WSHeading>
            <WSImage src={course.previewImage} width={0} height={0} className={`${styles.cardImage}`} alt='hoverImage' />
            <WSImage src={course.previewImageOnHover} width={0} height={0} className={`${styles.onHoverCardImage}`} alt='hoverImage' />
            
            <WSParagraph className={`${styles.description}`}>{course.previewDescription}</WSParagraph>
        </a>
    );
};

export default WSCourseCard;