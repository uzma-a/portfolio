import React from 'react';

const Skills = () => {
  return (
    <div className='skill flex flex-col m-8 md:m-20 gap-6'>
      <h1 className='text-2xl 5xl md:text-5xl underline underline-offset-8 decoration-2 mt-8'>Skills</h1>
      <div className="boxes grid grid-col s-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://img-c.udemycdn.com/course/750x422/4925142_c0ab.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>Web Technologies</h1>
            <ul className='list-disc mt-2 text-blue-950 font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://daveceddia.com/images/nzTwIqBkpn4.png" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-xl font-semibold h-16 flex items-center'>Front-End Frameworks and Libraries:</h1>
            <ul className='list-disc mt-2 text-blue-950 font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://liveimages.algoworks.com/new-algoworks/wp-content/uploads/2016/03/05134032/Why-use-ExpressJS-over-NodeJS.jpeg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>Back-End Development:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>UI/UX Design:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Responsive Design</li>
              <li>Microsoft UI Clone</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>Database Management:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://img-c.udemycdn.com/course/480x270/3352204_9c9a_20.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>Version Control:</h1>
            <ul className='list-disc mt-2 text-blue-950 font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Git, GitHub</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://www.freecodecamp.org/news/content/images/2023/03/coverchaat.jpg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>Additional Tools:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>npm</li>
              <li>Visual Studio Code</li>
              <li>ChatGPT-3.5</li>
            </ul>
          </div>
        </div>
        <div className="card rounded-lg bg-green-600 bg-opacity-75 p-4 flex flex-col items-center">
          <img className='bg-cover w-full rounded-lg' src="https://cdn.codegym.cc/images/article/911ab7b0-96b1-43de-b9b3-ca4cd00196bd/800.jpeg" />
          <div className="headings flex flex-col items-center p-6">
            <h1 className='text-xl md:text-2xl font-semibold h-16 flex items-center'>Problem Solving:</h1>
            <ul className='list-disc mt-2 text-blue-950  font-semibold underline underline-offset-2 decoration-2 h-20 flex flex-col'>
              <li>Debugging</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='border-0 h-0.5 bg-slate-800 m-8'/>
    </div>
  );
};

export default Skills;
