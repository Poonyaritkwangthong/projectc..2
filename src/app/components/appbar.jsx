import React from 'react'

export default function Appbar() {
  return (
    <div>
        <div className="flex justify-between p-2">
            <div className='text-3xl'>
                <ul className='flex gap-4 ml-2 mt-1'>
                    <a className='shadow-lg hover:shadow-indigo-500/40 font-semibold' href="/">HOME</a>
                    <a className='shadow-lg hover:shadow-indigo-500/40 font-semibold' href="/about">ABOUT</a>
                    <a className='shadow-lg hover:shadow-indigo-500/40 font-semibold' href="">CAR</a>
                </ul>
            </div>
            <div className='text-xl my-auto'>
                <ul className="flex justify-screen gap-6 mr-2">
                    <a className='shadow-lg hover:shadow-indigo-500/40g bg-white text-black p-2' href="">LOGIN</a>
                    <a className='shadow-lg hover:shadow-indigo-500/40 bg-white text-black p-2' href="">LOGOUT</a>
                </ul>
            </div>
        </div>
    </div>
  )
}
