import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
const navItems = ['ITEM', 'ITEM', 'ITEM', 'ITEM'];
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <main>
      <nav className='flex relative items-center justify-end w-full  min-h-[60px] max-w-[var(--max-width)] m-auto '>
        <ul className='hidden sm:flex items-center justify-between sm:w-[40%] md:w-[30%] lg:w-[26%]  mx-20 '>
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className='mx-2 lg:mx-0 p-2    text-center cursor-pointer  '
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className={nav ? 'hidden' : 'my-1  z-10'}>
          <FaBars
            size={30}
            className='sm:hidden mx-4 cursor-pointer z-10 '
            onClick={() => handleNav()}
          />
        </div>
        <div
          className={
            nav
              ? 'absolute overflow-y-hidden sm:hidden ease-in duration-300 text-gray-300 left-0 top-0 h-screen w-full bg-black/90 flex flex-col '
              : 'absolute top-0 h-screen left-[-100%] ease-in duration-200'
          }
        >
          <ul className='flex flex-col items-center justify-center h-screen'>
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className='py-8 text-xl text-white tracking-widest hover:text-white/50  '
                >
                  <a
                    href='#contact'
                    className='hover:bg-[bg-primary] '
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className='absolute right-[2.2%] top-[5%] text-white cursor-pointer'>
            <IoMdClose
              onClick={() => handleNav()}
              size={40}
            />
          </div>
        </div>
      </nav>
    </main>
  );
};
