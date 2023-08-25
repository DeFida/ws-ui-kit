import { FC, ReactNode } from 'react';
interface WSHeaderProps {
    children?: ReactNode;
    className?: string;
    logo?: any;
    onLogoClick?: () => void;
    buttons?: ReactNode;
}
declare const WSHeader: FC<WSHeaderProps>;
export default WSHeader;
