import React, { useState } from 'react';

import styles from './WSSelect.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: SelectOption[];
  onSelect: (selectedOption: SelectOption) => void;
  selectedOption: SelectOption | null;
}

const WSSelect: React.FC<CustomSelectProps> = ({ options, onSelect, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: SelectOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.WSSelect}`}>
      <div className={`${styles.header} ${isOpen ? styles.open : ''}`} onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
      {isOpen && (
        <ul className={`${styles.options}`}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${selectedOption === option ? styles.selected : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WSSelect;
