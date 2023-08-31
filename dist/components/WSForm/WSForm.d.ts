import React, { ReactNode, FormHTMLAttributes, FormEvent } from 'react';
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    width?: string;
    error: string | null;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
declare const WSForm: React.FC<FormProps>;
export default WSForm;
