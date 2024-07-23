import React from 'react'
import { services } from '../constants'
import Servicecard from '../componets/Servicecard'
const Services = () => {
  return (
    <section className='flex justify-center flex-wrap gap-9'>
    {services.map((service)=>(
            <Servicecard key={service.label} {...service} />
    ))}
</section>
  )
}

export default Services