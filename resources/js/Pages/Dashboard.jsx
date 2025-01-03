import Layout from '@/components/layout'
import PayinPerformance from '@/components/payinperformance'
import PayoutPerformance from '@/components/payoutperformance'
import React from 'react'

function Dashboard({section}) {
  const RenderSection = () => {
    switch( section ){
      case 'Payin':
        return <PayinPerformance />
      case 'Payout':
        return <PayoutPerformance />
        default:
          return <PayinPerformance/>
    }
  }
  return (
    <Layout>
      {RenderSection()}
    </Layout>
  )
}

export default Dashboard
