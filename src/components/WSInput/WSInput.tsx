import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import styles from './WSInput.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';
import colorsStyles from '../../styles/colors.module.scss';

interface WSInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    id: string;
    label: string;
    value: string | number | undefined;
    required?: boolean;
    error?: string | null;
    requiredMessage?: string | null;
    intermediate?: boolean;
    change: (data: any) => void;
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

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        change(e.target);
        setErrorMessage(null)
    }

    return (
        <div className={`${styles.WSInput} ${intermediate ? styles.WSInput_Intermediate : ''}`} >
            <label className={`${styles.Label} ${focused ? styles.Label_focused : ''}`} htmlFor={id}>{label} {required && '*'}</label>

            <input onBlur={blured} value={value} onChange={handleChange} onFocus={() => setFocused(true)} id={id} name={name} className={componentClassName} {...props} />

            {errorMessage && <WSParagraph className={`${colorsStyles.secondary} ${styles.Error}`}>{errorMessage}</WSParagraph>}

        </div>
        
    )
};

export default WSInput;