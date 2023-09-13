import React from 'react';
interface WSMarkdownRenderProps {
    content: any;
    onPopupOpen: (src: string) => void;
}
declare const WSMarkdownRender: React.FC<WSMarkdownRenderProps>;
export default WSMarkdownRender;
