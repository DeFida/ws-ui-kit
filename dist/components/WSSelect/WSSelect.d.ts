import React from 'react';
export interface SelectOption {
    value: string;
    label: string;
}
interface CustomSelectProps {
    options: SelectOption[];
    onSelect: (selectedOption: SelectOption) => void;
    selectedOption: SelectOption | null;
}
declare const WSSelect: React.FC<CustomSelectProps>;
export default WSSelect;
