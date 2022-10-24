import { FC } from 'react';

import Header from '../components/Header';
import Background from '../components/organisms/Background';
import BusButton from '../components/atoms/BusButton';
import Pluss from '../assets/button/pluss.svg';

const HomePage: FC = () => {
  return (
    <>
      <Background type='home' />
      <Header title='' />
      <div className='h-screen w-full pb-6'>
        <div className='h-1/6' />
        <div className='h-5/6'>
          <div className='flex justify-center items-center'>
            <div className='w-10/12 text-2xl flex items-start justify-center mb-6'>-- ぴよみる幼稚園 --</div>
          </div>
          <div className='flex justify-center'>
            <div className='w-10/12 flex justify-start flex-wrap'>
              <div className='w-1/2 h-36 flex items-center justify-center'>
                <BusButton to='/bus' name='バス' drive={false} />
              </div>
              <div className='w-1/2 h-36 flex items-center justify-center'>
                <BusButton to='/bus' name='バス' drive={true} />
              </div>
              <div className='w-1/2 h-36 flex items-center justify-center'>
                <BusButton to='/bus' name='バス' drive={false} />
              </div>
              <div className='w-1/2 h-36 flex items-center justify-center'>
                <button className='w-10/12 h-28 rounded-xl bg-[#FFE39E] flex justify-center items-center'>
                  <img src={Pluss} alt='pluss' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
