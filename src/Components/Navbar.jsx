import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("portfolio");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full'>
      <div className='nav w-full h-14 text-white bg-indigo-950'>
        <div className='flex justify-between items-center h-full px-4 md:px-8'>
          <div className="logo flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/4365/4365945.png" height={50} width={30} alt="logo" />
            <p className='text-2xl cursor-pointer hover:underline underline-offset-8 decoration-2' onClick={() => { setMenu("portfolio") }}>
              <Link to='/'>Uzma's Portfolio</Link> {menu === "portfolio" ? <hr /> : <></>}
            </p>
          </div>
          <div className="hidden md:flex gap-6">
            <ul className='flex gap-8 cursor-pointer items-center'>
              <li onClick={() => { setMenu("github") }}>
                <a to='/github' href="https://github.com/uzma-a" target="_blank" rel="noopener noreferrer"><button className='text-white bg-green-500 m-3  rounded-full flex  justify-between items-center ring-white ring-2'>

                  <svg className='invert  w-10 p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="36" color="black" fill="none">
                    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className='font-bold px-2'>GitHub</span>

                </button></a>{menu === "github" ? <hr /> : <></>}
              </li>

              <li onClick={() => { setMenu("linkedin") }}>
                <a to='/linkedin' href="https://www.linkedin.com/in/uzma-aashiya-700a46316/" target="_blank" rel="noopener noreferrer"><button className='text-white bg-blue-500 m-3  rounded-full flex  justify-between items-center ring-white ring-2'>

                  <svg  className='invert  w-10 p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="black" fill="none">
                    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  </svg>
                  <span className='font-bold px-2'>LinkedIn</span>

                </button></a>{menu === "linkedin" ? <hr /> : <></>}
              </li>


              <Link to='/contact'>
                <button className='bg-indigo-950 p-2 rounded-full text-white ring-white ring-2 hover:bg-indigo-900 hover:ring-gray-400'>
                 Contact me
                </button>
              </Link>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-indigo-950">
          <ul className='flex flex-col items-center gap-4 py-4'>
       
          <li onClick={() => { setMenu("github") }}>
            
                <a to='/github' href="https://github.com/uzma-a" target="_blank" rel="noopener noreferrer"><button className='text-white bg-green-500 m-3  rounded-full flex  justify-between items-center ring-white ring-2'>
                <button onClick={() => setIsOpen(false)}>
                  
                  <span className='font-bold px-2'>GitHub</span>

                </button></button></a>{menu === "github" ? <hr /> : <></>}
              </li>

              <li onClick={() => { setMenu("linkedin") }}>
            
                <a to='/linkedin' href="https://www.linkedin.com/in/uzma-aashiya-700a46316/" target="_blank" rel="noopener noreferrer"><button className='text-white bg-blue-500 m-3  rounded-full flex  justify-between items-center ring-white ring-2'>
                <button onClick={() => setIsOpen(false)}>
                  
                  <span className='font-bold px-2'>LinkedIn</span>

                </button></button></a>{menu === "linkedin" ? <hr /> : <></>}
              </li>


            <Link to='/contact'>
              <button onClick={() => setIsOpen(false)}>
                <svg className='hover:text-slate-300 mt-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#ffffff" fill="none">
                  <path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </Link>
          </ul>
        </div>
      )}
      <div className={isOpen ? "hidden" : "block"}>
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Navbar;
