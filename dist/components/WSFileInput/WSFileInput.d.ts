import { FC, InputHTMLAttributes } from 'react';
interface WSFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    id: string;
    label: string;
    required?: boolean;
    error?: string | null;
    requiredMessage?: string | null;
    intermediate?: boolean;
}
declare const WSFileInput: FC<WSFileInputProps>;
export default WSFileInput;
