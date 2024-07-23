import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../componets/ReviewCard'
const Customerreview = () => {
  return (
    <section>
        <h3 className='text-center text-2xl font-bold'>What Our
        <span className='text-orange-600'>Customers</span>
        Say?
        </h3>
        <p className='m-auto mt-4 max-w-lg text-lg text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
        </p>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>

  )
}

export default Customerreview