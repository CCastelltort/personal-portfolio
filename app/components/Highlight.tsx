import React from 'react'

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-bold ">
        {children}
    </span>
  )
}

export default Highlight