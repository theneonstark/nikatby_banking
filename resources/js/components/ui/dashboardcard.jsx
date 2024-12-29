import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Separator } from './separator'

function DashboardCard({title, count, amt, charge, gst, totalcharge}) {
  return (
    <div>
      <Card className={`bg-white/20 backdrop-blur-lg border border-white/10 shadow-lg rounded-lg p-4 text-white flex flex-col gap-4`}>
        <div className='flex justify-between'>
            <CardTitle>{title}</CardTitle>
            <CardTitle>{count}</CardTitle>
        </div>
        <CardTitle className="text-center">{amt}</CardTitle>
        <div className='flex justify-between'>
        <div>
            <p>Charge</p>
            <CardDescription className="text-white">{charge}</CardDescription>
        </div>
        <div>
            <p>GST</p>
            <CardDescription className="text-white">{gst}</CardDescription>
        </div>
        </div>
        <Separator/>
        <CardFooter>Total Charge: {totalcharge}</CardFooter>
      </Card>
    </div>
  )
}

export default DashboardCard
