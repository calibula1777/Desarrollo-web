import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      if (input === '0' && value !== '.') {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  const buttonValues = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <Card className="calculator-card shadow-lg">
      <Card.Body>
        <div className="calculator-display text-end p-2 mb-3 rounded">{input}</div>
        <div className="calculator-buttons">
          {buttonValues.map((row, rowIndex) => (
            <Row key={rowIndex} className="g-2 mb-2">
              {row.map((value, colIndex) => (
                <Col key={colIndex} xs={value === '0' || value === '.' || value === '=' ? 4 : 3}>
                  <Button
                    variant={
                      value === '+' || value === '-' || value === '*' || value === '/' || value === '='
                        ? 'warning'
                        : value === 'C'
                        ? 'danger'
                        : 'light'
                    }
                    className="w-100 h-100"
                    onClick={() => handleButtonClick(value)}
                  >
                    {value}
                  </Button>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Calculator;