import React from 'react'
import { Card, CardHeader, CardTitle } from './card'
import { SidebarSeparator } from './sidebar'

function NumberCard({title, payout}) {
  return (
    <div className='flex-1'>
      <Card className="h-full flex flex-col justify-center">
        <CardTitle className="p-3">{title}</CardTitle>
        <SidebarSeparator/>
        <CardHeader>{payout}</CardHeader>
      </Card>
    </div>
  )
}

export default NumberCard
