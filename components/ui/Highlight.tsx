import React, { ReactNode } from 'react'

interface HighlightProps {
  children: ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="font-bold ">
        {children}
    </span>
  )
}

export default Highlight