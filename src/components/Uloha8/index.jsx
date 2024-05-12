/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

import { useState } from 'react';

export const Uloha8 = () => {
  const [budePrset, setBudePrset] = useState('možná');
  const handelClick = () => {
    if (budePrset === "možná") {
      setBudePrset("ano")
    } else if (budePrset === "ano") {
      setBudePrset("ne")
    } else {
      setBudePrset("možná")
    }
  }
  return (
    <>
      <h3>Prší v Brně: {budePrset}</h3>
      <button onClick={handelClick}>změnit</button>
    </>
  );
};
