import React, { ReactNode, FormHTMLAttributes, FormEvent } from 'react';
import styles from './WSForm.module.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const WSForm: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
    return (
        <form className={`${styles.WSForm}`} onSubmit={onSubmit} {...props}>
            {children}
            
        </form>
    );
};

export default WSForm;


