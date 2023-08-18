import { ButtonHTMLAttributes, FC } from 'react';
interface WSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string;
    reversed?: boolean;
    action?: boolean;
    className?: string;
}
declare const WSButton: FC<WSButtonProps>;
export default WSButton;
