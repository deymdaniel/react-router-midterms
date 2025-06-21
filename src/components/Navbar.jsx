import { NavLink } from "react-router-dom";
import "./../index.css";

function Navbar() {
  return (
    <nav className='bg-orange-600 shadow'>
      <div className='mx-auto max-w-7xl px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-start'>
            <div className='flex items-center'>
              <span className='text-white font-extrabold text-3xl '>
                Zadala
              </span>
            </div>
            <div className='ml-auto block'>
              <div className='flex gap-4 text-white font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='#'>Cart</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
