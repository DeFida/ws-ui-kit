import { ButtonHTMLAttributes, FC } from 'react';
interface WSCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    dark?: boolean;
    className?: string;
}
declare const WSCloseButton: FC<WSCloseButtonProps>;
export default WSCloseButton;
