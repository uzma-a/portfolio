// import React, { useState } from 'react';

// const Footer = () => {
//   const [showAbout, setShowAbout] = useState(false);

//   const toggleAbout = () => {
//     setShowAbout(!showAbout);
//   };

//   return (
//     <footer className="bg-gray-900 text-white flex items-center justify-around m-20">
//       <div className="container mx-auto py-8 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="col-span-2 lg:col-span-1">
//             <h2 className="text-xl font-bold mb-4">About Me</h2>
//             <p className={`text-sm ${showAbout ? '' : 'hidden'}`}>
//               I'm Uzma, a passionate web developer based in [Your City]. I specialize in creating modern and responsive web applications using technologies like React.js, Tailwind CSS, and more.
//             </p>
//             <button
//               onClick={toggleAbout}
//               className="text-blue-300 hover:text-blue-500 mt-2 focus:outline-none"
//             >
//               {showAbout ? 'Hide About' : 'Show About'}
//             </button>
//           </div>
          
//           <div>
//             <h2 className="text-xl font-bold mb-4">Contact Me</h2>
//             <p className="text-sm">Email: uzmaaasia444@gmail.com<br />Phone: +91 8292389725</p>
            
//           </div>
//           <div>
//             <h2 className="text-xl font-bold mb-4"></h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-blue-300 hover:text-blue-500 "><button className='p-3 bg-green-600 border-2 border-white text-white font-semibold hover hover:bg-green-800'>Back To Top</button></a></li>
              
//             </ul>
//           </div>
//         </div>
        
//         <hr className="border-gray-700 my-8" />
//         <p className="text-center text-sm">&copy; 2024 Uzma. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 300) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 300) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showButton]);

  return (
    <footer className="bg-gray-900 text-white flex items-center justify-around py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className={`text-sm ${showAbout ? '' : 'hidden'}`}>
              I'm Uzma, a passionate web developer. I specialize in creating modern and responsive web applications using technologies like React.js, Tailwind CSS, and more.
            </p>
            <button
              onClick={toggleAbout}
              className="text-blue-300 hover:text-blue-500 mt-2 focus:outline-none"
            >
              {showAbout ? 'Hide About' : 'Show About'}
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <p className="text-sm">Email: uzmaaasia444@gmail.com<br />Phone: +91 8292389725</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4"></h2>
            <ul className="space-y-2">
              <li>
                <button
                  className={`p-3 bg-green-600 border-2 border-white text-white font-semibold hover:bg-green-800 ${showButton ? 'block' : 'hidden'}`}
                  onClick={scrollToTop}
                >
                  Back To Top
                </button>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        <p className="text-center text-sm">&copy; 2024 Uzma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
