import EnergyEfficient from '@/components/home/EnergyEfficient'
import EvolvingNeeds from '@/components/home/EvolvingNeeds'
import Hero from '@/components/home/Hero'
import Monitoring from '@/components/home/Monitoring'

import Pros from '@/components/home/Pros'
import RentalFeature from '@/components/home/RentalFeature'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <EnergyEfficient />
      <EvolvingNeeds />
      <Monitoring />
      <Pros />
      <Plans />
      <RentalFeature />
    </div>
  )
}

export default page
