export const Footer = () => {
  return (
    <section className='w-full min-h-[200px] bg-[var(--bg-primary)]'>
      <h1 className='mx-auto w-full sm:w-[90%] text-center py-4 text-4xl font-bold text-white'>
        Contact Us
      </h1>
      <form className='grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto my-0 py-4 max-w-[50%]'>
        <input
          className='bg-[var(--bg-secondary)] h-[var(--input-height)] px-2 rounded-md  border-gray-300 placeholder-gray-700 outline-none'
          placeholder='Your name *'
        />
        <input
          className='bg-[var(--bg-secondary)] h-[var(--input-height)] px-2 rounded-md  border-gray-300 placeholder-gray-700 outline-none'
          placeholder='Your email *'
        />
        <input
          className='bg-[var(--bg-secondary)] h-[var(--input-height)] px-2 rounded-md sm:col-span-2  border-gray-300 placeholder-gray-700 outline-none'
          placeholder='Your message *'
        />
        <button className='sm:w-auto px-4 h-[var(--btn-height)] bg-white rounded-md'>
          Send Message
        </button>
      </form>
    </section>
  );
};
