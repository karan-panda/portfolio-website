import Cursor from '@/components/Cursor'
import SlidingMarquee from '@/components/SlidingMarquee'
import { TypeAnimation } from 'react-type-animation'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Home () {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <Cursor />
      <h1 className='text-3xl font-bold text-center mt-10'>Home</h1>

      <div className='flex flex-col lg:flex-row justify-between items-center mt-10'>
        {/* Left Section */}
        <div className='flex-1 text-center lg:text-left p-6'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
            Hi There👋🏻, <br className='block sm:hidden' />
            <span className='text-3xl sm:text-4xl lg:text-6xl font-extrabold text-orange-600'>
              Karan Panda
            </span>{' '}
            here
          </h1>

          {/* Image for small screens */}
          <div className='block lg:hidden my-6'>
            <img
              src='/myImage.jpg'
              alt='Karan Panda'
              className='h-40 rounded-full mx-auto'
            />
          </div>

          <p className='text-xl sm:text-2xl lg:text-4xl mt-6'>
            I'm a passionate{' '}
          </p>

          <span className='text-2xl sm:text-3xl lg:text-5xl mt-4'>
            <TypeAnimation
              sequence={[
                'Software Developer',
                3000,
                'Designer',
                3000,
                'Innovator',
                3000
              ]}
              wrapper='span'
              speed={45} // Typing speed
              repeat={Infinity} // Infinite loop
              className='text-orange-500'
            />
          </span>

          {/* Resume Button */}
          <div className='mt-8'>
            <a
              href='https://drive.google.com/file/d/161ys8TXfxBW-6pm0CG2Y7PrBHyIG8bGv/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative group'
            >
              <FontAwesomeIcon icon={faFileArrowDown} className='mr-2 text-white' />
              View My Resume
              <span className='absolute top-1/2 right-[-1rem] transform -translate-y-1/2 group-hover:right-[-1.5rem] transition-all duration-300'></span>
            </a>
          </div>

        </div>

        {/* Right Section */}
        <div className='hidden lg:flex justify-start'>
          <img
            src='/myImage.jpg'
            alt='Karan Panda'
            className='h-72 rounded-full'
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-4 lg:mt-10'>
        <SlidingMarquee />
      </div>
    </div>
  )
}
