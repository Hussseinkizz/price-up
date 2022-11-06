import { useStore } from '../hooks/useStore';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Icons from 'react-icons/io5';

const BottomNavBar = () => {
  const [selected, setSelected] = useState('home');
  const { setState } = useStore();
  const router = useRouter();

  const updateTitleState = (value: string) => {
    setState({
      type: 'SET_TITLE',
      payload: value,
    });
  };

  const handleSelection = (target: string) => {
    if (target === selected) {
      return;
    }
    setSelected(target);
    updateTitleState(target);
    // handle tabs navigation
    if (target === 'home') {
      router.push('/');
    } else {
      router.push(`/${target}`);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-between px-4 py-2 cursor-pointer bg-white shadow-sm border-t border-gray-200 w-full _fixed-on-mobile bottom-0 md:hidden">
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'home' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('home')}>
        {selected === 'home' ? (
          <Icons.IoHome className="w-4 h-4" />
        ) : (
          <Icons.IoHomeOutline className="w-4 h-4" />
        )}
        Home
      </button>
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'services' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('services')}>
        {selected === 'services' ? (
          <Icons.IoBagHandle className="w-4 h-4" />
        ) : (
          <Icons.IoBagHandleOutline className="w-4 h-4" />
        )}
        Services
      </button>
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'chat' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('chat')}>
        {selected === 'chat' ? (
          <Icons.IoChatboxEllipses className="w-4 h-4" />
        ) : (
          <Icons.IoChatboxEllipsesOutline className="w-4 h-4" />
        )}
        Chat
      </button>
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'profile' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('profile')}>
        {selected === 'profile' ? (
          <Icons.IoPerson className="w-4 h-4" />
        ) : (
          <Icons.IoPersonOutline className="w-4 h-4" />
        )}
        Profile
      </button>
    </div>
  );
};

export default BottomNavBar;
