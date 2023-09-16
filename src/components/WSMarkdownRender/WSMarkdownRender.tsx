import React, { FC, HTMLProps, ReactNode, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './WSMarkdownRender.module.scss';
import gfm from 'remark-gfm';

import WSMDImage, { ImageBlockProps } from '../WSRenderComponents/WSMDImage';
import WSMDCode from '../WSRenderComponents/WSMDCode';
import fontsStyles from '../../styles/fonts.module.scss'
import colorsStyles from '../../styles/colors.module.scss'



interface WSMarkdownRenderProps extends HTMLProps<HTMLDivElement> {
    content: any;
    onPopupOpen: (src: string) => void;
}

interface WSStrongProps {
    children: string
}

const WSStrong: FC<WSStrongProps> = ({children}) => {
    return <span className={`${fontsStyles.bold}`}>{children}</span>
}


const WSMarkdownRender: React.FC<WSMarkdownRenderProps> = ({content, onPopupOpen, ...props}) => {
    
    const myComponents = {
        img: (props: ImageBlockProps) => <WSMDImage {...props} openPopup={onPopupOpen} />,
        strong: WSStrong,
        code: WSMDCode
    }

    return (
        <div className={`${styles.content}`} {...props}>
            {/* @ts-ignore */}
            <ReactMarkdown components={myComponents} className={`${styles.markdown}`} remarkPlugins={[gfm]}>{content}</ReactMarkdown>
        </div>
    );
};

export default WSMarkdownRender;