import React, { FC, ReactNode } from 'react';

import styles from './WSSidebar.module.scss';
import WSCloseButton from '../WSCloseButton/WSCloseButton';
import WSHeading from '../WSHeading/WSHeading';
import fontsStyles from '../../styles/fonts.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';

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
    openTopics: TopicProp[];
    onTopicClick: (topicId: string) => void;
}

const WSSidebar: FC<WSSidebarProp> = ({logo, module, onModuleClick, topics, openTopics, onTopicClick, onClose}) => {

    return (
        <div className={`${styles.sidebar}`}>
            <div className={`${styles.header}`}>
                <div className={`${styles.logowrapper}`}>{logo}</div>
                <WSCloseButton onClick={onClose} className={`${styles.close}`} />
            </div>
            <div className={`${styles.content}`}>
                { module && <WSHeading onClick={onModuleClick} type="h2" className={`${fontsStyles.regular} ${styles.heading}`}>{`<-`} Модуль: {module.name}</WSHeading> }
                <div className={`${styles.topics}`}>
                    {Array.from(topics).map((topic, id) => {
                        if (openTopics.some((openTopic) => openTopic._id === topic._id )) {
                            return  <div className={`${styles.topic}`} key={id} onClick={() => onTopicClick(topic._id)}>
                                        <WSParagraph className={`${styles.name}`}>{id + 1}. {topic.name}</WSParagraph>
                                    </div>
                        }
                        else {
                            return  <div className={`${styles.topic} ${styles.blockedTopic}`} key={id}>
                                        <WSParagraph className={`${styles.name}`}>{id + 1}. {topic.name}</WSParagraph>
                                    </div>
                        }
                        
                    })}
                </div>
            </div>
        </div>
    );
};

export default WSSidebar;