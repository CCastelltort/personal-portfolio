import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen px-10 py-24 flex flex-col bg-gradient-to-r from-blue-800 to-purple-800">
      {children}
    </div>
  )
}

export default Container