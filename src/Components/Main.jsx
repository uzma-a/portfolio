import React from 'react'


const Main = () => {



    return (
        <div>
            <div className="main flex flex-nowrapgap-4 justify-around text-white m-6 custom:flex-wrap custom:gap-4">
                <div className="left text-4xl p-6 mt-20" > Hey, My name is <span className='text-green-500 font-semibold'>Uzma,</span>
                    <p>a Creative and Passionate</p>
                    <div className="p flex  gap-2">
                        <p className='text-green-500 font-semibold'>Full-Stack Web developer</p>
                       
                    </div>

                </div>
                <div className="right mt-12">
                    <img className='rounded-full' src="https://static.vecteezy.com/system/resources/previews/011/634/349/non_2x/woman-programmer-working-on-a-new-project-free-vector.jpg" height={700} width={550} />
                </div>
            </div>
            <hr className='border-0 h-0.5 bg-slate-800 m-8' />
        </div>

    )

}

export default Main
