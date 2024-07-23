import React from 'react'
import { offer } from '../assets/images'
import { Button } from '../componets/Button'
import { arrowRight } from '../assets/icons'
const Specialoffer = () => {
  return (
    <section className='flex justify-center items-center max-xl:flex-col-reverse gap-10'>   

        <div className='flex-1 '>
          <img
          src={offer}
          alt = 'shoe Promotion'
          width={773}
          height={687}
          className='object-contain full'
          />
        </div>
        <div className='flex flex-col flex-1'>

          <h2 className='text-4xl font-bold'>
              <span className="text-blue-600">Special</span>
              offer
          </h2>
          <p className='mt-4 text-lg'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 text-lg'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} backgroundColor='none' />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
        </div>

    </section>
  )
}

export default Specialoffer