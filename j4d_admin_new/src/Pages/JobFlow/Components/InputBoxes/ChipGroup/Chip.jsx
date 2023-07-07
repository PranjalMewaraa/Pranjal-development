import React, { useState } from 'react';
import './Chip.scss'
const ChipButtonGroup = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    let newSelectedOptions = [...selectedOptions];

    if (newSelectedOptions.includes(option)) {
      newSelectedOptions = newSelectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions.push(option);
    }

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div className='ChipGroup'>
      {options.map((option) => (
        <button
        
          key={option}
          onClick={() => handleOptionClick(option)}
          className={selectedOptions.includes(option) ? 'selected' : 'ChipButton'}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChipButtonGroup;
