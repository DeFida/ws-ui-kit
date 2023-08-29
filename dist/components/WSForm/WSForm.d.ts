import React, { ReactNode, FormHTMLAttributes, FormEvent } from 'react';
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    width?: string;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
declare const WSForm: React.FC<FormProps>;
export default WSForm;
