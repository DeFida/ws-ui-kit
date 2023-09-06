import { FC } from 'react';
type CourseType = {
    id: string;
    name: string;
    linkName: string;
    previewImage: string;
    previewImageOnHover: string;
    previewDescription: string;
};
interface CourseProp {
    course: CourseType;
    className?: string;
}
declare const WSCourseCard: FC<CourseProp>;
export default WSCourseCard;
