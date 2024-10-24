import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active? 'border-sky-300 text-white border-b px-4' : 'border-transparent text-gray-500 border-b px-4';

  return (
    <button onClick={selectTab}>
        <p className={`mr-4 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton