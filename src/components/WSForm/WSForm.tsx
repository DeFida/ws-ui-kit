import React, { ReactNode, FormHTMLAttributes, FormEvent } from 'react';
import styles from './WSForm.module.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  width?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const WSForm: React.FC<FormProps> = ({ children, onSubmit, width = '400px', ...props }) => {
    return (
        <form className={`${styles.WSForm}`} onSubmit={onSubmit} style={{width}} {...props}>
            {children}
        </form>
    );
};

export default WSForm;


