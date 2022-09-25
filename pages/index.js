import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/common/navbar'
import TourCardOne from './components/common/tourCard_1';
import ServiceCard from './components/common/serviceCard';

export default function Home() {
  return (
    <div className={'relative'}>
      <Navbar />
      <div>
        <img src='/home-bg.jpg' className={'w-screen h-screen '} alt='people near born-fire' />
      </div>
      <div className='py-3'>
        <div className='flex items-center flex-col mb-8'>
          <div className='flex mb-1 font-bold	text-xl'>Hajj And Umrah Special Tour Packages</div>
          <div className='flex text-[#A99D9D] font-medium		text-base'>Don’t miss out on this special offers from us!</div>
        </div>
        <div className='p-3 flex overflow-x-scroll gap-8 lg:justify-evenly'>
          <TourCardOne />
          <TourCardOne />
          <TourCardOne />
          <TourCardOne />
        </div>
        <div className='bg-[#D9D9D9] p-3 flex w-full'>
          <div className='flex-1'>
            <div className='font-bold	text-xl mb-2'>What do we have to offer!</div>
            <div className='mb-3'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </div>
            <div className='flex flex-wrap gap-2'>
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
            </div>
          </div>
          <div className='flex flex-1 font-medium	text-base justify-center'></div>
        </div>
      </div>
    </div>
  )
}
