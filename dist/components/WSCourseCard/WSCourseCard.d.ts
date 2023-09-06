import { FC } from 'react';
interface CourseProp {
    id: string;
    name: string;
    linkName: string;
    previewImage: string;
    previewImageOnHover: string;
    previewDescription: string;
    className?: string;
}
declare const WSCourseCard: FC<CourseProp>;
export default WSCourseCard;
