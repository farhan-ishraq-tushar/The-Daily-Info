import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavBar from '../components/LeftNavBar';


const HomeLayout = () => {
    return (
        <div className='font-[poppins]'>
            <header>
                <Header></Header>
            </header>


            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 md:justify-center md:items-center'>
                <aside className='left col-span-3 md:text-center'>
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className='col-span-6 md:text-center'>Main Content</section>
                <aside className='col-span-3 md:text-center'>Right Content</aside>
            </main>
        </div>
    );
};

export default HomeLayout;