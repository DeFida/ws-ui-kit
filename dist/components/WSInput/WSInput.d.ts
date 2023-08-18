import { FC, InputHTMLAttributes } from 'react';
interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name: string;
    required?: boolean;
    id: string;
    label: string;
}
declare const WSInput: FC<WSInputProps>;
export default WSInput;
