import React from 'react';
import { Link } from 'react-router-dom';
import { Password } from '@phosphor-icons/react';
const NavBar: React.FC = () => {
  return (
    <div className="bg-purple-500">
      <div className="flex flex-1 px-2 py-4 items-center justify-between bg-slate-100">
        <span className="flex">
          <Link to={'/'}>
            <Password size={40} color="#000" />
          </Link>
        </span>
        <Link
          to={'/'}
          className="text-2xl text-slate-900 hover:text-3xl hover:font-medium transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        {''}
        <Link
          to={'/create'}
          className="text-2xl text-slate-900 hover:text-3xl hover:font-medium transition-all duration-300 ease-in-out"
        >
          Create
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
