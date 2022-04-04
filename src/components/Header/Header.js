import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';


const Header = () => {
    return (
        <div className='sticky top-0 flex justify-center px-12 py-4 md:justify-between bg-orange-200'>
            <div className='hidden md:block'>
                <Link to="/" className='font-sans font-bold text-xl text-gray-600'>
                    Charu Art Supplies
                </Link>
            </div>

            <div className='flex gap-2 text-xl pr-10'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>

        </div>
    );
};

export default Header;