import { FC } from 'react';
type CourseType = {
    id: string;
    name: string;
    previewImage: string;
    previewImageOnHover: string;
    previewDescription: string;
};
interface CourseProp {
    course: CourseType;
    className?: string;
    link: string;
}
declare const WSCourseCard: FC<CourseProp>;
export default WSCourseCard;
