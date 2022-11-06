import Link from 'next/link';
import { useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import * as Icons from 'react-icons/io5';

type Props = {};

const AppBar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="bg-white border-b border-gray-300 shadow-sm w-full _fixed-on-mobile md:hidden">
      <nav className="flex items-center justify-between px-4 py-2 ">
        {/* Nav Right, for menu */}
        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center p-1 text-sm text-gray-500 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-100 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setToggleNav(!toggleNav)}>
            <span className="sr-only">Open main menu</span>
            {showNav ? (
              <Icons.IoClose className="w-6 h-6 icon" />
            ) : (
              <Icons.IoMenu className="w-6 h-6 icon" />
            )}
          </button>
          {/* Menu, For Non Mobile */}
          {/* <DesktopMenu /> */}
        </div>
        {/* Nav Middle, for Brand */}
        <Link href="/" passHref>
          <button className="font-bold text-blue-600 text-xl hover:text-blue-500 transition-colors">
            Nexus
          </button>
        </Link>
        {/* Nav Action Right */}
        <div className="_flex-is-row justify-around gap-4 capitalize">
          <span className="rounded-full ring-1 ring-blue-100 bg-gray-100 p-2">
            <Icons.IoSearch className="w-4 h-4 text-gray-500 hover:text-gray-400" />
          </span>
          <span className="rounded-full ring-1 ring-blue-100 bg-gray-100 p-2">
            <HiIcons.HiShoppingCart className="w-4 h-4 text-gray-500 hover:text-gray-400" />
          </span>
          <span className="rounded-full ring-1 ring-blue-100 bg-gray-100 p-2">
            <Icons.IoNotifications className="w-4 h-4 text-gray-500 hover:text-gray-400" />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
