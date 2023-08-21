import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name: string;
    required?: boolean;
    id: string;
    label: string;
    value: string;
    error?: string | null;
    requiredMessage?: string | null;
    intermediate?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const WSInput: FC<WSInputProps>;
export default WSInput;
