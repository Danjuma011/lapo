// src/App.js
import React from "react";
import "./App.css";

function Calculator() {
  //   const [display, setDisplay] = useState('0');
  //   const [firstOperand, setFirstOperand] = useState(null);
  //   const [operator, setOperator] = useState(null);
  //   const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  //   const [memory, setMemory] = useState(0);
  //   const [history, setHistory] = useState([]);

  //   const inputDigit = (digit) => {
  //     if (waitingForSecondOperand) {
  //       setDisplay(String(digit));
  //       setWaitingForSecondOperand(false);
  //     } else {
  //       setDisplay(display === '0' ? String(digit) : display + digit);
  //     }
  //   };

  //   const inputDecimal = () => {
  //     if (waitingForSecondOperand) {
  //       setDisplay('0.');
  //       setWaitingForSecondOperand(false);
  //       return;
  //     }

  //     if (!display.includes('.')) {
  //       setDisplay(display + '.');
  //     }
  //   };

  //   const clearDisplay = () => {
  //     setDisplay('0');
  //     setFirstOperand(null);
  //     setOperator(null);
  //     setWaitingForSecondOperand(false);
  //   };

  //   const handleOperator = (nextOperator) => {
  //     const inputValue = parseFloat(display);

  //     if (firstOperand === null) {
  //       setFirstOperand(inputValue);
  //     } else if (operator) {
  //       const result = performCalculation();
  //       setDisplay(String(result));
  //       setFirstOperand(result);
  //       setHistory([...history, `${firstOperand} ${operator} ${inputValue} = ${result}`]);
  //     }

  //     setWaitingForSecondOperand(true);
  //     setOperator(nextOperator);
  //   };

  //   const performCalculation = () => {
  //     const inputValue = parseFloat(display);

  //     if (isNaN(firstOperand) return inputValue;

  //     switch (operator) {
  //       case '+':
  //         return firstOperand + inputValue;
  //       case '-':
  //         return firstOperand - inputValue;
  //       case '×':
  //         return firstOperand * inputValue;
  //       case '÷':
  //         return inputValue === 0 ? 'Error' : firstOperand / inputValue;
  //       case '%':
  //         return firstOperand % inputValue;
  //       default:
  //         return inputValue;
  //     }
  //   };

  //   const handleEquals = () => {
  //     if (operator === null || waitingForSecondOperand) {
  //       return;
  //     }

  //     const inputValue = parseFloat(display);
  //     const result = performCalculation();

  //     setDisplay(String(result));
  //     setFirstOperand(null);
  //     setOperator(null);
  //     setWaitingForSecondOperand(false);

  //     if (result !== 'Error') {
  //       setHistory([...history, `${firstOperand} ${operator} ${inputValue} = ${result}`]);
  //     }
  //   };

  //   const handleMemoryAdd = () => {
  //     setMemory(memory + parseFloat(display));
  //   };

  //   const handleMemorySubtract = () => {
  //     setMemory(memory - parseFloat(display));
  //   };

  //   const handleMemoryRecall = () => {
  //     setDisplay(String(memory));
  //   };

  //   const handleMemoryClear = () => {
  //     setMemory(0);
  //   };

  //   const handleBackspace = () => {
  //     if (display.length === 1 || (display.length === 2 && display.startsWith('-'))) {
  //       setDisplay('0');
  //     } else {
  //       setDisplay(display.slice(0, -1));
  //     }
  //   };

  //   const handlePlusMinus = () => {
  //     setDisplay(String(parseFloat(display) * -1));
  //   };

  //   const handleClearHistory = () => {
  //     setHistory([]);
  //   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-2">
          React Calculator
        </h1>
        <p className="text-center text-gray-600 mb-6">
          A modern calculator with history and memory functions
        </p>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Display */}
          <div className="p-4 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
            <div className="text-right text-xs h-5 mb-1">
              {/* {memory !== 0 && <span>M: {memory}</span>} */}
            </div>
            <div className="text-right text-4xl font-bold h-14 overflow-x-auto whitespace-nowrap">
              {/* {display} */}
            </div>
          </div>

          {/* Calculator Body */}
          <div className="grid grid-cols-4 gap-2 p-4 bg-gray-50">
            <button
              //   onClick={handleMemoryClear}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-150"
            >
              MC
            </button>
            <button
              //   onClick={handleMemoryRecall}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-150"
            >
              MR
            </button>
            <button
              //   onClick={handleMemoryAdd}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-150"
            >
              M+
            </button>
            <button
              //   onClick={handleMemorySubtract}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-150"
            >
              M-
            </button>

            {/* <button onClick={clearDisplay} className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition duration-150">C</button>
            <button onClick={handleBackspace} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-150">⌫</button>
            <button onClick={() => handleOperator('%')} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-150">%</button>
            <button onClick={() => handleOperator('÷')} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-150">÷</button>
            
            <button onClick={() => inputDigit(7)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">7</button>
            <button onClick={() => inputDigit(8)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">8</button>
            <button onClick={() => inputDigit(9)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">9</button>
            <button onClick={() => handleOperator('×')} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-150">×</button>
            
            <button onClick={() => inputDigit(4)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">4</button>
            <button onClick={() => inputDigit(5)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">5</button>
            <button onClick={() => inputDigit(6)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">6</button>
            <button onClick={() => handleOperator('-')} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-150">-</button>
            
            <button onClick={() => inputDigit(1)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">1</button>
            <button onClick={() => inputDigit(2)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">2</button>
            <button onClick={() => inputDigit(3)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">3</button>
            <button onClick={() => handleOperator('+')} className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition duration-150">+</button>
            
            <button onClick={handlePlusMinus} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">±</button>
            <button onClick={() => inputDigit(0)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">0</button>
            <button onClick={inputDecimal} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-150">.</button>
            <button onClick={handleEquals} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-150">=</button> */}
          </div>
        </div>

        {/* History Section */}
        <div className="mt-6 bg-white rounded-2xl shadow-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold text-indigo-800">
              Calculation History
            </h2>
            <button
              //   onClick={handleClearHistory}
              className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded transition duration-150"
            >
              Clear History
            </button>
          </div>
          <div className="h-40 overflow-y-auto">
            {/* {history.length === 0 ? (
              <p className="text-gray-500 text-center py-10">No calculations yet</p>
            ) : (
              <ul className="space-y-1">
                {history.map((item, index) => (
                  <li key={index} className="text-gray-700 p-2 bg-gray-50 rounded">{item}</li>
                ))}
              </ul>
            )} */}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} React Calculator | Made with ❤️</p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
