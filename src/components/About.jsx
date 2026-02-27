import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col gap-10'>
        <h1 className="text-[73.34px] font-bold font-['Raleway'] text-center mt-15 w-191">Welcome to the About page</h1>
        <button className='font-medium text-white bg-(--main-color) px-9 py-3 rounded-[10px] cursor-pointer hover:bg-(--main-color)/80 duration-300'>Get in Touch</button>
      </div>
    </>
  )
}

export default About