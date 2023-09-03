import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import inputStyles from '../WSInput/WSInput.module.scss';
import styles from './WSFileInput.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';
import colorsStyles from '../../styles/colors.module.scss';

interface WSFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    id: string;
    label: string;
    required?: boolean;
    error?: string | null;
    requiredMessage?: string | null;
    intermediate?: boolean;
    ref?: any;
}

const WSFileInput: FC<WSFileInputProps> = ({ className='', requiredMessage='', ref, intermediate=false, error=null, required=false, label, id, name, ...props }) => {
    let componentClassName = `${styles.Input} ${className}`;

    const [errorMessage, setErrorMessage] = useState<string | null>('')
    const [focused, setFocused] = useState(false);

    const [inputLabel, setInputLabel] = useState('Загрузить файл');

    const handleInputChange = () => {
        setInputLabel('Загружено')
    }
    
    useEffect(() => {
        setErrorMessage(error)
    }, [error])

    function blured() {
        setFocused(false)
        if (required) {
            setErrorMessage(requiredMessage)
        }
    }



    return (
        <div className={`${styles.WSFileInput} ${intermediate ? styles.WSFileInput_Intermediate : ''}`} >
            <p className={`${styles.Label} ${focused ? styles.Label_focused : ''}`}>{label} {required && '*'}</p>

            <input type='file' onBlur={blured} onFocus={() => setFocused(true)} id={id} name={name} ref={ref} className={componentClassName} onChange={handleInputChange} {...props} />
            <label htmlFor={id} className={`${styles.para} ${colorsStyles.secondary}`}>{inputLabel}</label>
            {errorMessage && <WSParagraph className={`${colorsStyles.secondary} ${styles.Error}`}>{errorMessage}</WSParagraph>}

        </div>
  );
}

export default WSFileInput;