import React, { ReactNode, FormHTMLAttributes, FormEvent } from 'react';
import styles from './WSForm.module.scss';
import WSParagraph from '../../../dist/components/WSParagraph/WSParagraph';
import { colorsStyles } from '../..';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  width?: string;
  error: string | null;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const WSForm: React.FC<FormProps> = ({ children, onSubmit, error=null, width = '400px', ...props }) => {
    return (
        <form className={`${styles.WSForm}`} onSubmit={onSubmit} style={{width}} {...props}>
            {children}
            {error && <WSParagraph className={`${colorsStyles.secondary}`}>{error}</WSParagraph>}
        </form>
    );
};

export default WSForm;


