import React, { useState } from 'react';

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

  const [currentLabel, setCurrentLabel] = useState<SelectOption>(selectedOption ? selectedOption : {value: '', label: label})

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: SelectOption) => {
    onSelect(option);
    setIsOpen(false);
    setCurrentLabel(option)
  };

  return (
    <div className={`${styles.WSSelect} ${intermediate ? styles.intermediate : ''}`}>
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
