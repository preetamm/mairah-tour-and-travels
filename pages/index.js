import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/common/navbar'
import TourCardOne from './components/common/tourCard_1';
import TourCardTwo from './components/common/tourCard_2';
import ServiceCard from './components/common/serviceCard';

export default function Home() {
  return (
    <div className={'relative'}>
      <Navbar />
      <div>
        <img src='/home-bg.jpg' className={'w-screen h-screen object-cover '} alt='people near born-fire' />
      </div>
      <div className='py-6'>
        <div className='flex items-center flex-col mb-8'>
          <div className='flex mb-1 font-bold	text-xl'>Hajj And Umrah Special Tour Packages</div>
          <div className='flex text-[#A99D9D] font-medium		text-base'>Don’t miss out on this special offers from us!</div>
        </div>
        <div className='p-3 flex overflow-x-scroll gap-8 lg:justify-evenly tour-container'>
          <TourCardOne />
          <TourCardOne />
          <TourCardOne />
          <TourCardOne />
        </div>
      </div>
      <div className='bg-[#D9D9D9]/[0.25] py-12 px-6 flex w-full '>
        <div className='flex-1 mb-3'>
          <div className='font-bold	text-xl mb-2'>What do we have to offer!</div>
          <div className='mb-6'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </div>
          <div className='flex flex-wrap gap-2'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
        <div className=' flex-1 hidden md:flex font-medium	text-base justify-center'></div>
      </div>
      <div className='py-6'>
        <div className='flex items-center flex-col mb-8'>
          <div className='flex mb-1 font-bold	text-xl'>All Inclusive Packages</div>
          <div className='flex text-[#A99D9D] text-center	 w-1/2 font-medium	text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className='p-3 flex overflow-x-scroll gap-8 lg:justify-evenly tour-container'>
          <TourCardTwo />
          <TourCardTwo />
          <TourCardTwo />
          <TourCardTwo />
        </div>
      </div>
    </div>
  )
}
