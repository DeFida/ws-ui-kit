import React, { useEffect, useRef, useState } from 'react';

import styles from './WSSelect.module.scss';
import WSParagraph from '../WSParagraph/WSParagraph';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  onSelect: (selectedOption: SelectOption) => void;
  selectedOption: SelectOption | null;
  label: string;
  intermediate?: boolean;
}

const WSSelect: React.FC<CustomSelectProps> = ({ options, onSelect, intermediate, label, selectedOption=null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement | null>(null)

  const [currentLabel, setCurrentLabel] = useState<SelectOption>(selectedOption ? selectedOption : {value: '', label: label})

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    setCurrentLabel(selectedOption ? selectedOption : {value: '', label: label})
  }, [selectedOption])
  

  const handleOptionSelect = (option: SelectOption) => {
    onSelect(option);
    setIsOpen(false);
    setCurrentLabel(option)
  };

  useEffect(() => {
    const closeDropdown = () => {
      setIsOpen(false);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    // Attach the click event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, [])



  return (
    <div className={`${styles.WSSelect} ${intermediate ? styles.intermediate : ''}`} ref={selectRef}>
      <div className={`${styles.header} ${isOpen ? styles.open : ''}`} onClick={toggleDropdown}>
        {currentLabel.label}
      </div>
      {isOpen && (
        <ul className={`${styles.options}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              <WSParagraph style={{padding: '1rem 0', margin: '0'}}>{option.label}</WSParagraph>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WSSelect;
