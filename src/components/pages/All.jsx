import React, { useState } from 'react'

function All() {

  const [more,setMore] = useState(false)
  const [view,setView] = useState(false)
  return (
    <div className=' flex justify-center'>
      <div  className='md:m-10 sm:m-6 m-4  sm:mx-[70px] md:mx-[130px]'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {/* box11 */}
          <div className=' space-y-6 '>
            {/* box1 */}
            <div className= ' bg-red-300 p-2 sm:p-6 justify-around rounded-2xl flex'>
              <div className='flex justify-around  flex-col'>
                <div className='text-xl text-gray-600'>September 24 ,2025 | </div>
                <div className='sm:text-4xl  text-xl font-semibold'>Startup landing page in 2024 / 2025 ...</div>
              </div>
              <div className='sm:h-[190px]  sm:w-[300px] h-[130px]  w-[100px]'>
                <img src="/download.jpg" alt="Logo" className="w-full  h-full  rounded-xl" />
              </div>
            </div>
            {/* box2 */}
            <div className= ' bg-red-300 p-2 sm:p-6  rounded-2xl flex'>
              <div className='flex justify-around  flex-col'>
                <div className='text-xl text-gray-600'>September 24 ,2025 | </div>
                <div className='sm:text-4xl  text-xl font-semibold'>What makes a brand iconic ?</div>
              </div>
              <div className='sm:h-[190px]  sm:w-[300px] h-[130px]  w-[100px]'>
                <img src="/download.jpg" alt="Logo" className="w-full  h-full  rounded-xl" />
              </div>
            </div>
          </div>
          {/* box22 */}
          <div className=' bg-red-200 rounded-3xl'>
            <div className='sm:my-10 my-4 ml-4 sm:ml-10'>
              <div className=' sm:w-[70%]  w-full space-y-4  justify-start'>
                <h1 className='text-gray-600 text-sm sm:text-xl'>September 24 ,2025 |  </h1>
                <p className='sm:text-3xl text-2xl font-semibold '>how to get Investores for a startups Using design</p>
                <p className='text-gray-600 text-sm sm:text-xl'>5 Solid tips for visulizing sucess and making your project </p>
              </div>
              <div className='flex justify-center  sm:justify-end my-10'>
                <div className='bg-blue-400 h-[170px] w-[50%] sm:w-[30%] '></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className='justify-self-center m-10 mt-16 font-semibold text-4xl'>More articles</h1>
        </div>
        <div>
          <div className='grid grid-cols-1 gap-y-10 sm:gap-y-[150px] gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {/* box 1 */}
            <div className=''>
              <div className='h-full  w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4 hover:scale-110'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> Empowering Indian Education with Affordable High-Tech Robotics Arm by ForthTech </p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement {view&&(<>dddddddddd</>)} </p>
                  <button onClick={()=>{setView(!view)}} className=''> {view?'View less':'Show more'}</button>

                </div>
              </div>
              <hr className='sm:hidden p-10' />
            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>

            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />
            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />

            </div>
            <div>
              <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                <div className='h-[60%] w-full mb-4 '>                
                  <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                </div>
                <div className='space-y-4'>
                  <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                  <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                  <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                </div>
              </div>
              <hr className='sm:hidden p-10' />
            </div>
            {
              more && (
                <>
                  <div>
                    <div className='h-full w-full flex justify-center items-center space-x-6 sm:block rounded-3xl'>
                      <div className='h-[60%] w-full mb-4 '>                
                        <img src="/download.jpg" alt="Logo" className=" h-full w-full rounded-3xl" />
                      </div>
                      <div className='space-y-4'>
                        <p className='text-gray-600 text-sm  sm:text-xl'>september 24,2024 | </p>
                        <p className='text-xl sm:text-2xl font-semibold'> start up landing page in 2024/2025 : new opportunities for a compititive edge</p>
                        <p className='text-sm sm:text-xl text-gray-600'>New gen interactive reading app with high user engagement</p>
                      </div>
                    </div>
                    <hr className='sm:hidden p-10' />

                  </div>
                </>
              )
            }
          </div>          
          <div className='flex m-[100px] justify-center'>
            <button onClick={()=>{setMore(!more)}} className='border-2 bg-black text-white sm:text-xl px-4 py-2 rounded-xl '>
              {more?'view Less' : 'view More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All