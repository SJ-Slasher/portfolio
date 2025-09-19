// export default About;
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/portfol.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-10 lg:px-20 font-sans"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Suprim Joshi
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Web Developer','Graphics Designer','Cycling Ethusiast','Guitarist']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4 mb-8">
            Hi, I’m Suprim Joshi. Technology excites me, and I enjoy turning ideas into real solutions. From coding to creating projects, I love exploring new tools and learning every day. My passion is solving problems with tech and growing as a creative, curious, and dedicated computer enthusiast.
          </p>

          <a
  href="/Suprim_Joshi_CV.pdf"
  download="Suprim_Joshi_CV.pdf"
  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
  }}
>
  DOWNLOAD CV
</a>



        </div>

      
        <div className="w-full md:w-1/2 flex justify-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Suprim Joshi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div> 
      </div>
    </section>
  );
  
  
};

export default About;