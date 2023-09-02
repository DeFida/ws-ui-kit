import { ButtonHTMLAttributes, FC } from 'react';
interface WSCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    closeImage: string;
    className?: string;
}
declare const WSCloseButton: FC<WSCloseButtonProps>;
export default WSCloseButton;
