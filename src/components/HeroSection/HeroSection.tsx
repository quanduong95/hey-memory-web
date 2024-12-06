import { DiApple } from 'react-icons/di';
export const HeroSection = () => {
  return (
    <section>
      <div className=''>
        <div className='text-4xl font-bold py-4 flex flex-col gap-2'>
          <h1>Turn Your Tweets </h1>
          <h1>into</h1>
          <h1>a</h1>
          <h1>Personal Diary</h1>
        </div>

        <h4 className='my-4'>
          Store your tweets, let AI summarize your days, and get personalized
          mental health tips.
        </h4>
        <div className='flex items-center justify-center cursor-pointer bg-[--black-primary] text-[--white-primary] w-[50%]  rounded-3xl my-4'>
          <div className=''>
            <DiApple size={50} />
          </div>
          <div className='my-2 '>
            <div className='text-sm mb-0 leading-none'>Download on the</div>
            <div className='text-2xl font-bold capitalize mt-0 leading-none'>
              app store
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
