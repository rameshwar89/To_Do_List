import React from 'react';
import '../index.css'
import { Typewriter } from 'react-simple-typewriter';

export default function TypingComponent() {
  return (
    <h1 className='font-bold text-blue-900 text-2xl '>
      <Typewriter
        words={['Enjoy your work !!','Welcome to iTask !!', 'Work Smoothly !!']}
        loop={0}
        cursor
        cursorStyle='_'
        typeSpeed={60}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
  );
}
