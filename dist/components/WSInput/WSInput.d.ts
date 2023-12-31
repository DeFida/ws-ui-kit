import { FC, InputHTMLAttributes } from 'react';
interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    id: string;
    label: string;
    value: string | number | undefined;
    required?: boolean;
    error?: string | null;
    requiredMessage?: string | null;
    intermediate?: boolean;
    change: (data: any) => void;
}
declare const WSInput: FC<WSInputProps>;
export default WSInput;
