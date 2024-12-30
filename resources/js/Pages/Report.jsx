import Layout from '@/components/layout'
import Transition from '@/components/transition'
import React from 'react'

function Report({section}) {
  const ReportSection = () => {
    switch(section){
      case "transaction":
      return <Transition/>;
      case "ledger":
      return <h2>Payin Report</h2>
      default: return <h2>Invalid Request</h2>
    }
  }
  return (
    <Layout>
      {ReportSection()}
    </Layout>
  )
}

export default Report;
