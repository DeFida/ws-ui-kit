import { FC, HTMLProps } from 'react';
interface WSParagraphProps extends HTMLProps<HTMLParagraphElement> {
    className?: string;
    article?: boolean;
}
declare const WSParagraph: FC<WSParagraphProps>;
export default WSParagraph;
