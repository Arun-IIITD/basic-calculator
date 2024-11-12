import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleEquals = () => {
        try {
            setInput(eval(input).toString()); // Using eval to evaluate the expression
        } catch (error) {
            setInput('Error');
        }
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    return (
        <div className="calculator">
            {/* Welcome Back message */}
            <div className="welcome-message">
                Welcome back to Calculator!
            </div>

            <div className="display">
                {input || '0'}
            </div>
            <div className="buttons">
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('/')}>/</button>

                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('*')}>*</button>

                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('-')}>-</button>

                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={handleEquals} className="equals">=</button>
                <button onClick={() => handleButtonClick('+')}>+</button>

                <button onClick={handleClear} className="clear">C</button>
                <button onClick={handleBackspace}>←</button>
            </div>
        </div>
    );
};

export default Calculator;
