import React from 'react'

const LoginSignup = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f16290a6-360e-4d5f-ba52-353f4a5f45ad");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className='loginsignup w-full min-h-screen pt-20 bg-#f0f0f0 font-poppins '>
      <div className="loginsignup-container mx-auto  h-auto w-full p-6 max-w-lg shadow-md rounded-full">
        <h1 className='font-semibold text-2xl md:text-4xl'>Contact Me</h1>
        <form onSubmit={onSubmit} className="loginsignup-fields mt-6 flex flex-col gap-4 ">
        <input type="text" name="name" placeholder='Your Name' className='w-full h-12 md:h-16 border-solid border-2 border-blue-900 rounded-sm pl-4 text-black'/>
        <input type="email" name="email" placeholder='Your Email'  className='w-full h-12  md:h-16 border-solid border-2 border-blue-900 rounded-sm pl-4 text-black'/>
        <textarea name="message" rows="8" placeholder='Enter your message' className='w-full h-12  md:h-16 border-solid border-2 border-blue-900 rounded-sm pl-4 text-black' ></textarea>
        <button type="submit" className=' mt-6 bg-blue-900 text-white text-lg w-full h-12 md:text-xl md:h-16 hover:bg-blue-700 active:bg-blue-700'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup

