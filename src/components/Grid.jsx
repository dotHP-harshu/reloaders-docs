import React, { useState } from 'react'
import Card from './Card'
import categoryList from '../data/categoryList';
import loadedComponents from "../data/loaderComponentsData"
import PopupCard from './PopupCard';


function Grid({activeLink}) {

  const cards = loadedComponents[activeLink]
  const [popupCardElem, setPopupCardElem] = useState(null)

  return (
    <main className="w-[70vw] p-14 max-sm:p-6 max-xs:p-4 lg:mt-6 max-lg:mt-10 max-sm:mt-16 max-xs:mt-20 max-sm:w-full">
      {/* heading */}
      <h3 className="text-2xl max-xs:text-lg font-semibold my-4">
        <span className="text-accent-color">$ </span> {categoryList[activeLink]}
      </h3>
      {/* heading */}
      {/* card grid */}
      <div className="w-full grid lg:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 place-items-center gap-10 py-6 max-xs:py-4">
        {
          cards.map((card, i)=>(
            <Card key={i} card={card} setPopupCardElem={setPopupCardElem}/>
          ))
        }
      </div>
      {/* card grid */}
      {/* card popup */}
      {
        popupCardElem && <PopupCard card={popupCardElem} setPopupCardElem={setPopupCardElem} />
      }
      {/* card popup */}
    </main>
  );
}

export default Grid
