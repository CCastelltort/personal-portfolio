import React, { ReactNode } from 'react'

interface PageTitleProps {
  children: ReactNode;
}
const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <div className="flex justify-center pt-26">
      <h1 className="text-5xl font-bold font-sans text-white">
        {children}
      </h1>
    </div>
  )
}

export default PageTitle