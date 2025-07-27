import React, { useEffect, useRef } from 'react'

function PopupCard({ card, setPopupCardElem }) {
  const cardWrapperRef = useRef(null);
  const cardRef = useRef(null);

  const copyText = (e) => {
    const text = e.target.innerText;
    if(text) {
      navigator.clipboard.writeText(text);
      e.target.innerText = "Copied...";
      setTimeout(() => {
        e.target.innerText = text
      }, 500);
    }
    
  };

  useEffect(() => {
    const hidepopup = document.addEventListener("click", (e) => {
        if(cardRef.current !== null){
            if(!cardRef.current.contains(e.target) && cardWrapperRef.current.contains(e.target) ){
                setPopupCardElem(null)
            }
        }
    });
    

    return () => {
      document.removeEventListener("click",hidepopup)
    };
  }, []);

  return (
    // container
    <div
      ref={cardWrapperRef}
      className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-[100] backdrop-blur-md bg-transparent p-6"
    >
      {/* card  */}
      <div
        ref={cardRef}
        className="w-[35vw]  max-sm:w-full h-auto p-6 max-xs:p-2 bg-surface-bg-light dark:bg-surface-bg-dark border-2 border-border-light dark:border-border-dark rounded-md flex flex-col justify-center items-center"
      >
        {/* component */}
        <div className="w-30 h-30 flex justify-center items-center ">
          {card.component}
        </div>
        {/* component */}
        {/* details */}
        <div className="w-full flex flex-col justify-center items-start gap-4 mt-4">
          <h3
            onClick={copyText}
            className="bg-border-light dark:bg-border-dark py-2 px-4 text-main-text-light dark:text-main-text-dark rounded-sm tracking-tight text-sm cursor-pointer"
          >
            {card.name}
          </h3>
          <h3
            onClick={copyText}
            className="bg-border-light dark:bg-border-dark py-2 px-4 text-muted-text-light dark:text-muted-text-dark rounded-sm tracking-tight text-sm cursor-pointer"
          >
            {card.import}
          </h3>
          <ul className=" flex flex-wrap gap-2">
            <h4 className="text-base w-fit">Props:</h4>

            {card.props.map((prop, index) => (
              <li
                key={index}
                className="bg-border-light dark:bg-border-dark px-2 py-1 rounded-2xl text-xs text-accent-color "
              >
                {prop}
              </li>
            ))}
          </ul>
        </div>
        {/* details */}
      </div>
      {/* card  */}
    </div>
    // container
  );
}

export default PopupCard
