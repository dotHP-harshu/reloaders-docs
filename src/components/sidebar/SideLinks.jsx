import React from 'react'

function SideLinks({linkName, active, setActiveLink, linkKey}) {
  return (
    <>
      <div onClick={()=>{setActiveLink(linkKey)}} className={ `block text-lg hover:text-accent-color transition-colors duration-300 w-fit cursor-pointer select-none ${active === linkKey ? "text-accent-color font-semibold": "text-muted-text-dark dark:text-muted-text-dark font-light"}`}>{linkName}</div>
    </>
  )
}

export default SideLinks
