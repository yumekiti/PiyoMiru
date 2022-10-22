import { FC } from 'react';
import { Link } from 'react-router-dom';
import Back from '../assets/back.svg';
import nameLogo from '../assets/nameLogo.svg';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='flex w-full items-end justify-center h-20 bg-[#FBD579] pb-2 absolute top-0 left-0 z-10'>
      <img src={nameLogo} alt='nameLogo' className='w-1/2' />
      {/* <h1 className='text-2xl'>{title}</h1>
      <Link to='/home' className='absolute left-4'>
        <img src={Back} alt='戻る' />
      </Link> */}
    </div>
  );
};

export default Header;
