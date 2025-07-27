import React from 'react'
import PopupCard from './PopupCard';
// Import all components from their respective files

function Card({ card, setPopupCardElem }) {
  return (
    <div
      onClick={() => {
        setPopupCardElem(card);
      }}
      className="w-48 h-48 p-6 bg-surface-bg-light dark:bg-surface-bg-dark rounded-md border-2 border-border-light dark:border-border-dark hover:shadow-2xl hover:shadow-border-light dark:hover:shadow-border-dark transition-shadow duration-300 flex justify-center items-center"
    >
      {card.component}
    </div>
  );
}

export default Card
