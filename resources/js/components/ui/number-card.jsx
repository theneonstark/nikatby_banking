import React from 'react'
import { Card, CardHeader, CardTitle } from './card'
import { SidebarSeparator } from './sidebar'

function NumberCard({title, payout, inclasses, outclasses}) {
  return (
    <div className='flex-1 '>
      <Card className={`bg-white/20 backdrop-blur-lg border border-white/10 shadow-lg rounded-lg p-4 h-full flex flex-col justify-center`}>
        <CardTitle className="text-white p-3">{title}</CardTitle>
        <SidebarSeparator/>
        <CardHeader className="text-2xl text-white">{payout}</CardHeader>
      </Card>
    </div>
  )
}

export default NumberCard
