import React, { ReactNode } from 'react'

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="list-disc pl-6 space-y-2">
            {children}
        </ul>
    </div>
  )
}

export default InfoCard