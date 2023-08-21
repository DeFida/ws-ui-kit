import React, {ChangeEvent, FC, InputHTMLAttributes, useEffect, useState} from 'react';
import styles from './WSInput.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';
import { colorsStyles } from '../..';

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

const WSInput: FC<WSInputProps> = ({ children, className='', requiredMessage='', value, onChange, intermediate=false, error=null, required=false, label, id, name, ...props }) => {
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

            <input onBlur={blured} value={value} onChange={onChange} onFocus={() => setFocused(true)} id={id} name={name} className={componentClassName} {...props} />

            {errorMessage && <WSParagraph className={`${colorsStyles.secondary} ${styles.Error}`}>{errorMessage}</WSParagraph>}

        </div>
        
    )
};

export default WSInput;