import { useState } from 'react';
import './carousel.css';

/*
Zadání 1: Nachystejte si adresy obrázků níže do pole.
Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku.
  Na začátku 0.
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
*/

/*
  Adresy obrázků:
  https://source.unsplash.com/WLUHO9A_xik/880x500
  https://source.unsplash.com/DA1eGglMmlg/880x500
  https://source.unsplash.com/kTxL6le0Wgk/880x500
  https://source.unsplash.com/7go5UASxmDY/880x500
  https://source.unsplash.com/YmATDIFsCmQ/880x500
*/

const obrazky = [
  "https://source.unsplash.com/WLUHO9A_xik/880x500",
  "https://source.unsplash.com/DA1eGglMmlg/880x500",
  "https://source.unsplash.com/kTxL6le0Wgk/880x500",
  "https://source.unsplash.com/7go5UASxmDY/880x500",
  "https://source.unsplash.com/YmATDIFsCmQ/880x500"
]

export const Uloha4 = () => {
  const [index, setIndex] = useState(0);

  // const handlePrevious = () => {
  //   if (index > 0) {
  //     setIndex(index - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (index < obrazky.length - 1) {
  //     setIndex(index + 1);
  //   }
  // };

  return (
    <div className="carousel">
      <button
        className="carousel__predchozi"
        aria-label="předchozí"
        onClick={() => setIndex(index - 1)}
        disabled={index === 0}
      >
        ←
      </button>
      <div className="carousel__media">
        <img
          className="carousel__image"
          src={obrazky[index]}
          alt=""
        />
      </div>
      <button
        className="carousel__dalsi"
        aria-label="další"
        onClick={() => setIndex(index + 1)}
        disabled={index === obrazky.length - 1}
      >
        →
      </button>
    </div>
  );
};

// v Reactu lze připsat do chlupatých závorek k disabled hodnotu buď true (= znemožní klik) nebo false (=lze klikat)
