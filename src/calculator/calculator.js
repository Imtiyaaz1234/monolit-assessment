import React, { useState } from 'react';
import './calculator.css';
import { evaluate } from 'mathjs';

export const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const isValidCharacter = (char) => {
        const validChars = "0123456789+-x÷.";
        return validChars.includes(char);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
    
        let sanitizedValue = '';
        for (let char of value) {
            if (isValidCharacter(char)) {
                sanitizedValue += char;
            }
        }
    
        setInput(sanitizedValue);
    };

    const appendToInput = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const calculateResult = () => {
        try {
            let evalResult;
            const sanitizedInput = input.replace(/x/g, '*').replace(/÷/g, '/');
            evalResult = evaluate(sanitizedInput);
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculatorWrapper">
            <div className="blueBorderContainer">
                <input 
                    type="text" 
                    className="inputDiv"
                    value={input} 
                    onChange={handleInputChange}
                />
                <div>
                    <button className="squareBlueButton" onClick={() => appendToInput('+')}>+</button>
                    <button className="squareBlueButton" onClick={() => appendToInput('-')}>-</button>
                    <button className="squareBlueButton" onClick={() => appendToInput('x')}>x</button>
                    <button className="squareBlueButton" onClick={() => appendToInput('÷')}>÷</button>
                    <button className="squareBlueButton" onClick={calculateResult}>=</button>
                </div>
            </div>
            <div className="blueBorderContainer">
            <input 
                type="text" 
                className="inputDiv"
                value={`Result: ${result}`} 
                readOnly 
            />
            </div>
        </div>
    );
};
