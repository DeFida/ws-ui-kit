import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import styles from './WSInput.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';
import { colorsStyles } from '../..';

interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    id: string;
    label: string;
    value: string;

    required?: boolean;
    error?: string | null;
    requiredMessage?: string | null;
    intermediate?: boolean;
    change: (value: string) => void;
}

const WSInput: FC<WSInputProps> = ({ className='', requiredMessage='', value, change, intermediate=false, error=null, required=false, label, id, name, ...props }) => {
    let componentClassName = `${styles.Input} ${className}`;
    
    const [errorMessage, setErrorMessage] = useState<string | null>('')
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        setErrorMessage(error)
    }, [error])


    function blured() {
        setFocused(false)
        if (required && !value) {
            setErrorMessage(requiredMessage)
        }
    }

    return (
        <div className={`${styles.WSInput} ${intermediate ? styles.WSInput_Intermediate : ''}`} >
            <label className={`${styles.Label} ${focused ? styles.Label_focused : ''}`} htmlFor={id}>{label} {required && '*'}</label>

            <input onBlur={blured} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => change(e.target.value)} onFocus={() => setFocused(true)} id={id} name={name} className={componentClassName} {...props} />

            {errorMessage && <WSParagraph className={`${colorsStyles.secondary} ${styles.Error}`}>{errorMessage}</WSParagraph>}

        </div>
        
    )
};

export default WSInput;