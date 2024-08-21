import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex bg-gray-800 text-white mt-24 p-5'>
      <div>    
      <h1 className='text-4xl font-bold m-5'>About</h1>
      <hr className='m-6'></hr>
      <p className='m-5 text-xl'>Welcome to Find Your Hospital, your go-to platform for reliable and up-to-date healthcare information. We are committed to bridging the gap between patients and essential healthcare services, ensuring that you have access to critical resources when you need them the most.</p>
      </div>
      <div>
        <h1 className='text-4xl font-bold m-5'>Our Mission</h1>
        <hr className='m-6'></hr>
        <p className='m-5 text-xl'>At Find Your Hospital, our mission is to empower individuals with the information they need to make informed healthcare decisions. Whether you're searching for available hospital beds, nearby medicine dispensaries, or the closest medical facilities, our platform is designed to provide you with accurate and timely data.</p>
      </div>
      <div>
        <h1 className='text-4xl font-bold m-5'>About The Founder</h1>
        <hr className='m-6'></hr>
        <p className='m-5 text-xl'>Our platform was created by a passionate tech enthusiast currently pursuing a B.Tech in Computer Science at NSUT Delhi. With a strong background in web development and a deep commitment to leveraging technology for social good, has developed this platform to address some of the most pressing challenges in healthcare access today.</p>
      </div>
    </div>
    </>
  )
}

export default About
