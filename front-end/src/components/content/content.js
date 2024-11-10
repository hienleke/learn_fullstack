import React, { useState } from 'react';
import React, { useState } from 'react';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown}>Dropdown</button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#f1f1f1',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            zIndex: 1,
            width: '100%',
          }}
        >
          {options.map((option, index) => (
            <a
              key={index}
              href={option.link}
              style={{ padding: '10px', display: 'block' }}
            >
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
