import React from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from './card'
import { Separator } from './separator'

function DashboardCard({title, count, amt, charge, gst, totalcharge, inclasses, outclasses}) {
  return (
    <div>
      <Card className={`${outclasses ? outclasses : inclasses} text-white`}>
        <div className='flex justify-between'>
            <CardHeader>{title}</CardHeader>
            <CardHeader>{count}</CardHeader>
        </div>
        <CardTitle>{amt}</CardTitle>
        <div className='flex justify-between'>
        <div>
            <p>Charge</p>
            <CardTitle>{charge}</CardTitle>
        </div>
        <div>
            <p>GST</p>
            <CardTitle>{gst}</CardTitle>
        </div>
        </div>
        <Separator/>
        <CardFooter>Total Charge: {totalcharge}</CardFooter>
      </Card>
    </div>
  )
}

export default DashboardCard
