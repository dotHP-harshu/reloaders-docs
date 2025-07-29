import React from 'react'
import PopupCard from './PopupCard';
// Import all components from their respective files

function Card({ card, number, setPopupCardElem }) {
  return (
    <div
      onClick={() => {
        setPopupCardElem(card);
      }}
      className="w-48 h-48 p-6 relative bg-surface-bg-light dark:bg-surface-bg-dark rounded-md border-2 border-border-light dark:border-border-dark hover:shadow-2xl hover:shadow-border-light dark:hover:shadow-border-dark transition-shadow duration-300 flex justify-center items-center"
    >
      <span className="absolute bottom-0 right-0 text-xs text-accent-color p-2 ">
        $ <span className="text-main-text-light dark:text-main-text-dark">{number}</span>
      </span>
      {card.component}
    </div>
  );
}

export default Card
