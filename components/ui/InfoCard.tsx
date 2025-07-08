import React, { ReactNode } from 'react'

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <div className="bg-white/30 p-6 rounded-2xl text-white text-justify border border-white">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <div>
            {children}
        </div>
    </div>
  )
}

export default InfoCard