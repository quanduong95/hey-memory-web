import React from 'react';

export const FeaturesSection = () => {
  return (
    <section className='mt-14 w-full flex flex-col items-center justify-center gap-8'>
      <div className=' flex gap-4 items-center flex-col justify-center '>
        <img
          src='../../../public/assets/icons/boxes.png'
          alt='icon'
          className='w-30 h-24'
        />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='capitalize text-2xl text-[--black-primary] font-bold'>
            store
          </h1>
          <p>
            Save your{' '}
            <span className='bg-gray-200 p-1 rounded-xl'>daily thoughts</span>{' '}
            effortlessly
          </p>
        </div>
      </div>
      <div className=' flex gap-4 items-center flex-col justify-center '>
        <img
          src='../../../public/assets/icons/reflect.png'
          alt=''
          className='w-30 h-24'
        />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='capitalize text-2xl text-[--black-primary] font-bold'>
            reflect
          </h1>
          <p className='text-center'>
            Let AI{' '}
            <span className='bg-gray-200 p-1 rounded-xl'>rewind your day</span>,
            offering meaningful summaries of your experiences.
          </p>
        </div>
      </div>
      <div className=' flex gap-4 items-center flex-col justify-center '>
        <img
          src='../../../public/assets/icons/insight.png'
          alt=''
          className='w-30 h-24'
        />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='capitalize text-2xl text-[--black-primary] font-bold'>
            insight
          </h1>
          <p className='text-center'>
            Receive thoughtful recommendations to help you manage your{' '}
            <span className='bg-gray-200 p-1 rounded-xl'>
              mental well-being
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
