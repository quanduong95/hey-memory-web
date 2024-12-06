import React from 'react';

export const IntroSection = () => {
  return (
    <section className=''>
      {' '}
      <p className='my-14 mr-14'>
        beYou is a platform that transforms your tweets into a personal diary,
        providing <span className='bg-gray-200 p-1 rounded-xl'>AI-powered</span>{' '}
        summaries, emotional insights, and mental health recommendations. Loved
        by self-reflective individuals, wellness enthusiasts, and tech-savvy
        creators seeking meaningful growth.
      </p>
      <div className='rounded-xl overflow-hidden w-full'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/2rybR50StWc?autoplay=1&loop=1&playlist=2rybR50StWc'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
