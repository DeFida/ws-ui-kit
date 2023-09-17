import React, { HTMLProps } from 'react';
interface WSMarkdownRenderProps extends HTMLProps<HTMLDivElement> {
    content: any;
    onPopupOpen: (src: string) => void;
}
declare const WSMarkdownRender: React.FC<WSMarkdownRenderProps>;
export default WSMarkdownRender;
