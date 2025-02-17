import React from 'react';
import { NavLink } from 'react-router-dom';

function Blog() {
  return (
    <>
      <section className=''>
        <div className="flex justify-center overflow-x-auto  items-center flex-col">
          {/* Title */}
          <div>
            <h1 className="sm:text-8xl text-5xl mt-10"><span className=''>Forth</span><span className='text-red-500'>Tech</span> Blog</h1>
          </div>

          <div className=''>
            <div className="space-x-16 m-16 ">
              <NavLink
                to="All"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-lg font-semibold border-2 p-2 px-4 rounded-3xl" 
                    : "hover:text-red-500 text-lg font-semibold" 
                }
              >
                All
              </NavLink>
              <NavLink
                to="Branding"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-lg p-2 px-4 rounded-3xl border-2 font-semibold"
                    : "hover:text-red-500 text-lg font-semibold"
                }
              >
                Branding
              </NavLink>
              <NavLink
                to="Design"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-lg  p-2 px-4 rounded-3xl border-2  font-semibold"
                    : "hover:text-red-500 text-lg font-semibold"
                }
              >
                Design
              </NavLink>
              <NavLink
                to="SuccessStory"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-lg  p-2 px-4 rounded-3xl border-2  font-semibold"
                    : "hover:text-red-500 text-lg font-semibold"
                }
              >
                SuccessStory
              </NavLink>
              <NavLink
                to="LeaderShip"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500  p-2 px-4 rounded-3xl border-2  text-lg font-semibold"
                    : "hover:text-red-500 text-lg font-semibold"
                }
              >
                LeaderShip
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;