import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './WSMarkdownRender.module.scss';
import gfm from 'remark-gfm';

import WSMDImage, { ImageBlockProps } from '../WSRenderComponents/WSMDImage';
import WSMDCode from '../WSRenderComponents/WSMDCode';


interface WSMarkdownRenderProps {
    content: any;
    onPopupOpen: (src: string) => void;
}



const WSMarkdownRender: React.FC<WSMarkdownRenderProps> = ({content, onPopupOpen}) => {
    
    const myComponents = {
        img: (props: ImageBlockProps) => <WSMDImage {...props} openPopup={onPopupOpen} />,
        code: WSMDCode
    }

    return (
        <div className={`${styles.content}`}>
            {/* @ts-ignore */}
            <ReactMarkdown components={myComponents} className={`${styles.markdown}`} remarkPlugins={[gfm]}>{content}</ReactMarkdown>
        </div>
    );
};

export default WSMarkdownRender;