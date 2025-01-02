import Layout from '@/components/layout'
import React from 'react'

function Cerdentials() {
  return (
    <Layout>
        <h2>Cerdentials</h2>
        <p>Your account credentials are:</p>
        <ul>
          <li>Username: nikatby</li>
          <li>Password: 123456</li>
        </ul>
      <button>Logout</button>
    </Layout>
  )
}

export default Cerdentials
