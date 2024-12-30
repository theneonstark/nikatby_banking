import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { Send } from 'lucide-react'
import { Button } from './ui/button'

function UpiPayment() {
  return (
    <div>
      <Card>
            <CardTitle>Create VPA</CardTitle>
        <CardContent>
            <div className='grid grid-cols-3'>
                <CardContent>
                <CardHeader className="p-0">Name</CardHeader>
                <Input placeholder="Enter Name"/>
                </CardContent>
                <CardContent>
                <CardHeader className="p-0">Mobile</CardHeader>
                <Input placeholder="Enter Your Mobile"/>
                </CardContent>
                <CardContent>
                <CardHeader className="p-0">Pancard</CardHeader>
                <Input placeholder="Enter Pancard"/>
                </CardContent>
            </div>
            <div>
            <CardContent>
                <CardHeader className="p-0">Address</CardHeader>
                <Input placeholder="Enter Your Address"/>
                </CardContent>
            </div>
            <div className='grid grid-cols-3'>
                <CardContent>
                <CardHeader className="p-0">City</CardHeader>
                <Input placeholder="Enter Your City"/>
                </CardContent>
                <CardContent>
                <CardHeader className="p-0">State</CardHeader>
                <Input placeholder="Enter Your State"/>
                </CardContent>
                <CardContent>
                <CardHeader className="p-0">Pin Code</CardHeader>
                <Input placeholder="Enter Your PIN"/>
                </CardContent>
            </div>
            <Separator />
            <div>
                <Button type="submit" className="w-full mt-5" color="primary">
                  <Send size="16" className="ml-2" />
                  PROCEED TO ONBOARD
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UpiPayment
