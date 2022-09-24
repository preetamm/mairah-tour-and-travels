import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/common/navbar'
import TourCardOne from './components/common/tourCard_1';

export default function Home() {
  return (
    <div className={'relative'}>
      <Navbar />
      <div>
        <img src='/home-bg.jpg' className={'w-screen h-screen '} alt='people near born-fire' />
      </div>
      <div className='p-8'>
        <div className='flex items-center flex-col mb-8'>
          <div className='flex mb-1 font-bold	text-xl'>Hajj And Umrah Special Tour Packages</div>
          <div className='flex text-[#A99D9D] font-medium		text-base'>Don’t miss out on this special offers from us!</div>
        </div>
        <div className='p-3 flex overflow-x-scroll gap-8'>
          <TourCardOne/>
          <TourCardOne/>
          <TourCardOne/>
          <TourCardOne/>
        </div>
      </div>
    </div>
  )
}
