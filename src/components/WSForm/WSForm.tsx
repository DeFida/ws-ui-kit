import React, { ReactNode, FormHTMLAttributes, FormEvent } from 'react';
import styles from './WSForm.module.scss';
import WSButton from '../WSButton/WSButton';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  width?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitButton: string;
}

const WSForm: React.FC<FormProps> = ({ children, submitButton, onSubmit, width = '400px', ...props }) => {


  return (
    <form className={`${styles.WSForm}`} onSubmit={onSubmit} style={{width}} {...props}>
      {children}
      <WSButton style={{width: '100%'}} action>{submitButton}</WSButton>
    </form>
  );
};

export default WSForm;
