import { FC, ReactNode } from 'react';
interface WSHeaderProps {
    children?: ReactNode;
    className?: string;
    logo?: ReactNode;
    buttons?: ReactNode;
}
declare const WSHeader: FC<WSHeaderProps>;
export default WSHeader;
