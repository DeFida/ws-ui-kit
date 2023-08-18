import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
type HeadingType = 'h1' | 'h2';
interface WSHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children?: string;
    type: HeadingType;
    className?: string;
}
declare const WSHeading: FC<WSHeadingProps>;
export default WSHeading;
