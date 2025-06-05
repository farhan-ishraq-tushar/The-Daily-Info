// import Link from 'daisyui/components/link';
// import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-gray-200 p-2'>
            <p className='bg-red-400 text-base-100 px-3 py-1 w-fit'>Latest</p>
            
            {/* by using react-fast-marque from https://www.npmjs.com/package/react-fast-marquee */}
            <Marquee pauseOnHover={true} className=''>
                <Link to="/news">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid accusamus 
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;