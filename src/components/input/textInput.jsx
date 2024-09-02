import React from 'react';

const TextInput = ({ placeholder, value, setInputValue }) => {
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            style={{
                padding: "5px",
                paddingLeft: "15px",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "1050px", 
                height: "45px",
                boxSizing: "border-box",
                marginTop: "20px",
                marginLeft: "10px"
            }}
        />
    );
};

export default TextInput;
