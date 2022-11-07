import Link from 'next/link'
// import { useWindowScroll } from 'react-recipes';
const {useWindowScroll} = require('react-recipes');
import Image from 'next/image'

type Props = {}
// const Window = window
export const Header = (props: Props) => {
    const { y } = useWindowScroll();
        const getDirection = (y: number) => {
        const direction = !previousYScroll || previousYScroll < y ? 'down' : 'up';
        previousYScroll = y;
        return direction;
        }
    const scrollHeight = 10
    const scrollBorder = scrollHeight / 2;
    let previousYScroll = 0;
    let currentYScroll = y;
    const scrollDirection = getDirection(currentYScroll)
    const isOffScreen = scrollDirection === 'down' && currentYScroll > scrollHeight;
    const isScrolling = currentYScroll > scrollHeight;
    const borderScroll = scrollDirection === 'down' && currentYScroll > scrollBorder;

  return (
    <header className={`sticky w-full top-0 left-0 bg-transparent z-50 backdrop-blur-sm ${isScrolling ? 'shadow-md' : 'shadow-none'}`}>
        <nav className="_flex-is-row justify-between py-2 px-4">
            <div className="nav-start">
                <Link href="/">
                    <div className="_flex-is-row gap-2">
                    <Image width={50} height={50} src={isScrolling ? '/Price-Up-Logo-Colored.svg' : '/Price-Up-Logo.svg'} alt="logo" className="w-10 h-10" />
                    <span className={`transition-colors font-bold uppercase text-base md:text-xl font-roboto ${isScrolling ? 'text-indigo-600' : 'text-white'}`}>Price Up</span>
                    </div>
                </Link>
            </div>
            <div className="nav-middle hidden md:flex justify-around items-center gap-6 lg:gap-8">
                <Link href="/#home">
                    <span className={`capitalize font-medium  transition-colors ${isScrolling ? ' text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-indigo-400'}`}>home</span>
                </Link>
                <Link href="/about">
                    <span className={`capitalize font-medium  transition-colors ${isScrolling ? ' text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-indigo-400'}`}>about</span>
                </Link>
                <Link href="/#pricing">
                    <span className={`capitalize font-medium  transition-colors ${isScrolling ? ' text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-indigo-400'}`}>pricing</span>
                </Link>
                <Link href="/#how-it-works">
                    <span className={`capitalize font-medium  transition-colors ${isScrolling ? ' text-indigo-600 hover:text-indigo-500' : 'text-white hover:text-indigo-400'}`}>how it works</span>
                </Link>
            </div>
            <div className="nav-end">
               {isScrolling ? <button className="grid place-items-center py-2 px-3 text-sm md:text-base md:py-2 md:px-4 bg-indigo-600 text-white hover:bg-indigo-500 hover:text-indigo-50 transition-all active:scale-95 rounded-lg shadow-sm hover:shadow-md md:tracking-wide">Get Started</button> :
                <button className="grid place-items-center py-2 px-3 text-sm md:text-base md:py-2 md:px-4 bg-indigo-500 text-white hover:bg-indigo-500/50 hover:text-indigo-50 transition-all active:scale-95 rounded-lg shadow-sm hover:shadow-md md:tracking-wide">Get Started</button>}
            </div>
        </nav>
    </header>
  )
}