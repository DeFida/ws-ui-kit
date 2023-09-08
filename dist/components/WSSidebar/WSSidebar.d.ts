import { FC, ReactNode } from 'react';
interface ModuleProp {
    _id: string;
    name: string;
    duration: number;
    previewImage: string;
    topics?: TopicProp[];
}
interface TopicProp {
    _id: string;
    name: string;
    videoLink: string;
    lessons: LessonProp[];
}
interface LessonProp {
    _id: string;
    name: string;
    content: string;
}
interface WSSidebarProp {
    logo: ReactNode;
    onClose: () => void;
    module: ModuleProp | null;
    onModuleClick: () => void;
    topics: TopicProp[];
    onTopicClick: (topicId: string) => void;
}
declare const WSSidebar: FC<WSSidebarProp>;
export default WSSidebar;
