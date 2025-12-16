import React, { useRef } from 'react'
import OSMMap from './OSMMap'
import Footer from './Footer'
const Contact = () => {
  const name=useRef()
  const email=useRef()
  const number=useRef()
  const company=useRef()
  const area=useRef()
const handle=(e)=>{
e.preventDefault();
const n=name.current.value;
const em=email.current.value;
 const num=number.current.value;
 const com=company.current.value;
 const ar=area.current.value;
 if(!n.trim()||!em.trim()||!num.trim()||!com.trim()||!ar.trim()){
  alert("Please Enter Details")
  return
};
 name.current.value="";
 email.current.value="";
 number.current.value="";
 company.current.value="";
 area.current.value="";


}
  return (
    <div className="w-full mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-8 px-6">
        <div className="flex flex-col gap-5 md:w-1/4">
          <h1 className="font-serif font-bold text-2xl">ADDRESS</h1>

          <p className="font-serif text-sm">
            Yogurja Wellness Center, Building A7 EnviroCare, <br />
            MIDC Main Road, Wagle Industrial Estate, <br />
            Thane, Maharashtra 400604
          </p>

          <h1 className="font-serif font-bold text-2xl">PHONE NO.</h1>
          <p>+91-9870113471</p>

          <h1 className="font-serif font-bold text-2xl">EMAIL</h1>
          <p>yogurjawellness@gmail.com</p>
        </div>
        <div className="w-[2px] bg-black opacity-55"></div>
        <div className="md:w-1/2">
          <div className="text-center mb-6">
            <p className="text-sm opacity-60 font-serif">INFORMATION ABOUT US</p>
            <h2 className="text-lg font-semibold font-serif">
              REGISTRATION CONTACT
            </h2>
          </div>

          <form onSubmit={handle} className=" grid gap-4 opacity-75 transition-all duration-300">
            <div>
              <label className="font-serif text-sm">Your Name</label>
              <input className="w-full border-2 p-2 border-zinc-300 rounded-md outline-0 hover:shadow-md shadow-zinc-500 active:scale-101" ref={name}/>
            </div>

            <div>
              <label className="font-serif text-sm">Your Email</label>
              <input className="w-full border-2 p-2 border-zinc-300 rounded-md outline-0 hover:shadow-md shadow-zinc-500 active:scale-101" ref={email}/>
            </div>

            <div>
              <label className="font-serif text-sm">Phone Number</label>
              <input className="w-full border-2 p-2 border-zinc-300 rounded-md outline-0 hover:shadow-md shadow-zinc-500 active:scale-101" ref={number}/>
            </div>

            <div>
              <label className="font-serif text-sm">Company</label>
              <input className="w-full border-2 p-2 border-zinc-300 rounded-md outline-0 hover:shadow-md shadow-zinc-500 active:scale-101" ref={company} />
            </div>

            <div className="md:col-span-2">
              <label className="font-serif text-sm">Your Message</label>
              <textarea className="w-full border-2 p-2 border-zinc-300 rounded-md outline-0 hover:shadow-md shadow-zinc-500 active:scale-101" ref={area} rows={4}></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button className="bg-orange-500 active:scale-95 text-white px-6 py-2 mt-4 font-bold rounded-lg">
                ASK A QUESTION
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/4 flex flex-col items-center gap-4 text-center">
          <p className="font-serif opacity-80 text-sm">
            Note: After Payment Send Screenshot to <br />
            +91 9870113471
          </p>

          <h1 className="font-extrabold font-serif text-2xl">SCAN & PAY</h1>

          <img
            className="w-56"
            src="https://tse3.mm.bing.net/th/id/OIP.x_OVZ9FSsgnW65amxj7e3QHaHa?pid=Api"
            alt="QR Code"
          />
        </div>
      </div>
      <div className='h-auto p-6  mt-10'>
        <OSMMap/>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact
