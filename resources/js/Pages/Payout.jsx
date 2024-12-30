import Layout from '@/components/layout'
import React from 'react'

function Payout({section}) {
  const handle =() =>{
    switch (section){
      case 'qrcode':
        return <h2>QRCode</h2>
      case 'upirequest':
        return <h2>UPI Request</h2>
      case 'addfund':
        return <h2>Add Fund</h2>
      default:
        return <h2>Invalid section</h2>
    }
  }
  return (
    <Layout>
      {handle(section)}
    </Layout>
  )
}

export default Payout
