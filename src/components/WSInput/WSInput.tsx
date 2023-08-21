import React, {FC, InputHTMLAttributes, useEffect, useRef, useState} from 'react';
import styles from './WSInput.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';
import { colorsStyles } from '../..';

interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name: string;
    required?: boolean;
    id: string;
    label: string;
    error?: string | null;
}

const WSInput: FC<WSInputProps> = ({ children, className='', error=null, required=false, label, id, name, ...props }) => {
    let componentClassName = `${styles.WSInput} ${className}`;
    
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>('')

    useEffect(() => {
        setErrorMessage(error)
    }, [error])
    
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