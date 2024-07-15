import React from 'react'
import { Link } from 'react-router-dom'

const MyProject = () => {


    return (
        <div className='m-20 gap-6'>
            <h1 className='text-5xl underline underline-offset-8 decoration-2 '>My Project</h1>
            <div className="paragraph mt-20 flex flex-col">
                <h1 className='text-xl'>Project 1 : <span className='text-green-600 font-semibold underline underline-offset-2 decoration-2'>My PortFolio</span></h1>
                <p className='mt-10'>I created this personal portfolio website to showcase my skills and creativity in web development. The website includes section of About, Skills, My Project, Contact me and Footer. I made my portfolio clean with whatever I learned. This portfolio is completely responsive. Every Section of the project highlights my proficiency in technologies like <span className='text-green-600 font-semibold '>Tailwind CSS  </span >and <span className='text-green-600 font-semibold  '>React.js</span>.</p>
                <p className='mt-6 '><span className='text-green-600 font-semibold '>- Technologies Used :  </span>    HTML5 , CSS3, JavaScript, React.js, TailwindCSS.</p>
                <p className='mt-6 '><span className='text-green-600 font-semibold '>- Challenges :  </span>  Making the portfolio <span className='text-green-600 font-semibold '>fully responsive  </span >on all devices.</p>
                <p className='mt-6 '><span className='text-green-600 font-semibold'>- Solution :  </span> Utilized Tailwind CSS's responsive utilities and also using <span className='text-green-600 font-semibold '>ChatGPT-3.5 </span> to ensure the website looks good on all screen sizes.</p>
                <p className='mt-6 '><span className='text-green-600 font-semibold '>- Source Code : [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/portfolio" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/portfolio" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/portfolio</span></a> <span className='text-green-600 font-semibold '> ]</span> </p>
                
            </div>

            <div className="paragraph mt-20 flex flex-col">
                <h1 className='text-xl'>Project 1 : <span className='text-green-600 font-semibold underline underline-offset-2 decoration-2'>Microsoft UI Clone with AI-Enhaced Feature</span></h1>
                <p className='mt-10'>I am currently working on building a Microsoft UI clone with <span className='text-green-600 font-semibold'>AI-enhanced features</span>. The goal of this project is to replicate the familiar Microsoft user interface while integrating <span className='text-green-600 font-semibold'>advanced AI capabilities</span>. The clone will include popular Microsoft Office applications like <span className='text-green-600 underline underline-offset-2 '>Word</span> , <span className='text-green-600 underline underline-offset-2 '>Excel</span> ,  <span className='text-green-600 underline underline-offset-2 '>Access</span> ,  and <span className='text-green-600 underline underline-offset-2 '>Powerpoint</span> , each enhanced with AI features. <span className='text-green-600 font-semibold'>For example</span> , in Excel, users will experience AI-powered formula suggestions, making data analysis more efficient.</p>

                <p className='mt-6 '><span className='text-green-600 font-semibold '>- Source Code :  [</span> <span className='text-blue-600 underline underline-offset-2 '><a href="https://github.com/uzma-a/Microsoft-UI-Clone-with-AI-enhanced" target="_blank" rel="noopener noreferrer"></a></span>  <a href="https://github.com/uzma-a/portfolio" target="_blank" rel="noopener noreferrer"><span className='text-blue-600 underline underline-offset-2 '>https://github.com/uzma-a/Microsoft-UI-Clone-with-AI-enhanced</span></a> <span className='text-green-600 font-semibold '> ]</span> </p>
            </div>
            <hr className='border-0 h-0.5 bg-slate-800 m-8' />

            <div className="mt-24 ">
                <a className='bg-red-600 p-3 rounded-md hover:bg-red-500' href="https://drive.google.com/file/d/1herPVgFpgXfxsyBzFKMJ94HRwQaLwX7Y/view" download>
                    <button>Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default MyProject
