import AddMoney from '@/components/addmoney'
import Layout from '@/components/layout'
import QrPayment from '@/components/qrpayment'
import UpiPayment from '@/components/upipayment'
import React from 'react'

function Payout({section}) {
  const handle =() =>{
    switch (section){
      case 'qrcode':
        return <QrPayment/>
      case 'upirequest':
        return <UpiPayment/>
      case 'addfund':
        return <AddMoney/>
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
