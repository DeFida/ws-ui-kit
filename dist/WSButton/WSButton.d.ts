import { FC } from 'react';
export interface WSButtonProps {
    children?: string;
    reversed?: boolean;
    action?: boolean;
    className?: string;
}
declare const WSButton: FC<WSButtonProps>;
export default WSButton;
