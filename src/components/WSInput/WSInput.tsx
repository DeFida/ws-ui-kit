import React, {FC, InputHTMLAttributes, useRef, useState} from 'react';
import styles from './WSInput.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';
import { colorsStyles } from '../..';

interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name: string;
    required?: boolean;
    id: string;
    label: string;
}

const WSInput: FC<WSInputProps> = ({ children, className='', required=false, label, id, name, ...props }) => {
    let componentClassName = `${styles.WSInput} ${className}`;
    
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>('You are an error!')

    return (
        <div>
            <div>
                <label htmlFor={id}>{label}</label>
                {required && <p>*</p>}
            </div>

            <input id={id} ref={inputRef} name={name} className={componentClassName} {...props} />
            {errorMessage && <WSParagraph className={colorsStyles.secondary}>{errorMessage}</WSParagraph>}
        </div>
        
    )
};

export default WSInput;