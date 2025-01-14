import React from 'react'
import styles from './GetInTouch.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faEnvelopeOpenText
} from '@fortawesome/free-solid-svg-icons'

const GetInTouch = () => {
  return (
    <div className='relative flex items-center justify-center w-40 h-40 rounded-full'>
      {/* Rotating Text */}
      <div className='absolute w-full h-full flex items-center justify-center'>
        <svg
          className={`w-full h-full ${styles['animate-rotate-circle']}`}
          viewBox='0 0 100 100'
        >
          <path
            id='circlePath'
            d='M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0'
            fill='none'
          />
          <text>
            <textPath
              href='#circlePath'
              className='text-[10px] text-white uppercase tracking-wider'
              startOffset='0%'
            >
              Get In Touch • Get In Touch • Get In Touch •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Circle with Message Icon */}
      <div
        className={`absolute flex items-center justify-center w-20 h-20 rounded-full bg-white transition-colors duration-500 group ${styles['fill-circle']}`}
      >
        {/* Closed Envelope */}
        <FontAwesomeIcon
          icon={faEnvelope}
          className='text-black text-3xl transition-opacity duration-500 group-hover:opacity-0'
        />
        {/* Open Envelope */}
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          className='text-black text-3xl absolute opacity-0 transition-opacity duration-550 group-hover:opacity-100'
        />
      </div>
    </div>
  )
}

export default GetInTouch
