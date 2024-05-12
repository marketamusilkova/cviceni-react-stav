import { useState } from 'react';
import './style.css';
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);

  const handleChange1 = (e) => {
    setInputValue1(e.target.valueAsNumber);
  };

  const handleChange2 = (e) => {
    setInputValue2(e.target.valueAsNumber);
  };

  const soucet = inputValue1 + inputValue2;

  return (
    <div className="bonus4">
      <input type="number" value={inputValue1} onChange={handleChange1}/> {' + '}
      <input type="number" value={inputValue2} onChange={handleChange2}/> = <output>{soucet}</output>
    </div>
  );
};

// valueAsNumber je property, která umí vracet value jako číslo
