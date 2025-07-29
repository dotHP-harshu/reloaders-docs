import SideLinks from './sidebar/SideLinks'
import categoryList from "../data/categoryList"
import { RxCross2 } from "react-icons/rx";
import {  useState } from 'react';
import { BsFilterSquareFill } from 'react-icons/bs';

function Sidebar({activeLink, setActiveLink}) {
  const [isShowing, setIsShowing] = useState(false)
  
  return (
    <>
      <aside className="bg-surface-bg-light w-[25vw] min-w-60 dark:bg-surface-bg-dark border-r-2 border-r-border-light dark:border-r-border-dark p-8 fixed top-20 right-0 z-50 h-fit max-sm:hidden space-y-6 flex justify-between items-start flex-col">
        <div>
          {Object.entries(categoryList).map(([key, label], i) => (
            <SideLinks
              key={key}
              linkName={label}
              active={activeLink}
              setActiveLink={setActiveLink}
              linkKey={key}
            />
          ))}
        </div>
        <footer className="w-full text-center text-xs text-muted-text-light dark:text-muted-text-dark mt-10">
          Made with ❤️ by <span className="text-accent-color">dotHP</span>
        </footer>
      </aside>
      <BsFilterSquareFill
        onClick={() => setIsShowing(true)}
        size={26}
        className="fixed max-sm:block hidden top-28 right-5 z-50 text-main-text-light dark:text-muted-text-dark"
      />
      {/* Mobile sidebar */}
      <aside
        className={`bg-surface-bg-light w-[25vw] min-w-60 dark:bg-surface-bg-dark border-r-2 b order-r-border-light dark:border-r-border-dark p-8 fixed top-20 right-0 z-50 h-full hidden max-sm:flex  transition-all duration-300 space-y-6   items-start flex-col ${
          isShowing ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <RxCross2
            size={26}
            onClick={() => setIsShowing(false)}
            className="absolute top-5 right-5 text-main-text-light dark:text-muted-text-dark"
          />
          {Object.entries(categoryList).map(([key, label], i) => (
            <div
              key={key}
              onClick={() => setIsShowing(false)}
              className="w-fit h-fit"
              >
              <SideLinks
                linkName={label}
                active={activeLink}
                setActiveLink={setActiveLink}
                linkKey={key}
              />
            </div>
          ))}
        </div>
        <footer className="w-full text-center text-xs text-muted-text-light dark:text-muted-text-dark mt-10">
          Made with ❤️ by <span className="text-accent-color">dotHP</span>
        </footer>
      </aside>
      {/* Mobile sidebar */}
    </>
  );
}

export default Sidebar
