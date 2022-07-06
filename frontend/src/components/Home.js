import React from 'react'
import Navbar from './Navbar'
import SwiperCom from './SwiperCom'
import craftvideo from '../videos/vecteezy-crafts.mp4'
import bgImg from '../imgs/bg.jpg'
// import logo from '../imgs/logo.png'

const Home = () => {
    return (
        <div className=' '>
            <div>
                <Navbar className='' />
                <div className='h-full flex flex-col justify-center items-center '>
                    <div className='h-[35rem]  w-full mx-12 bg-black border rounded-lg flex flex-col justify-center items-center mx-32' style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/59d4e845edaed8e83ad6d176/1507301941987-XG39A8DNUTT85YSU837T/Natural+Veneer+Stack+%287%29.JPG?format=1000w"})` }} >
                        {/* <img className='bgImg absolute ' src={bgImg} alt="" /> */}
                        <h2 className='text-7xl text-white didot'>Fill your home with uniqueness.</h2>
                    </div>
                    <button className='border bg-black text-white px-2 py-1 text-xl rounded-lg shadow-lg px-3  py-2 my-12'>Know More</button>

                    <div className='flex justify-between w-full my-12 px-32'>
                        <div>
                            <h2 className='text-3xl didot font-bold'>NOX VENEERS</h2>
                            <p>INTERESTING WOOD VENEERSPECIES BY NOX Natural VENEERS</p>
                            <button className='border bg-black text-white px-2 py-1 text-xl rounded-lg shadow-lg px-3  py-2 my-2'>Explore More</button>
                        </div>
                        <div>
                            <img className='w-96 h-72' src={"https://startwoodworkingnow.com/wp-content/uploads/2020/11/types-of-wood-veneer.jpg"} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between w-full my-12 px-32'>
                        <div>
                            <img className='w-96 h-72' src={"https://www.wood-veneer.eu/files/woodveneer/Home/slider/wood-veneer-slider-02.jpg"} alt="" />
                        </div>
                        <div>
                            <h2 className='text-3xl didot font-bold'>NOX VENEERS</h2>
                            <p>INTERESTING WOOD VENEERSPECIES BY NOX Natural VENEERS</p>
                            <button className='border bg-black text-white px-2 py-1 text-xl rounded-lg shadow-lg px-3  py-2 my-2'>Explore More</button>
                        </div>
                    </div>
                    {/* <video className='' autoPlay loop muted>
                    <source  src={craftvideo} type='video/mp4' />
                </video>                 */}
                </div>
            </div>
            <SwiperCom />
        </div>
    )
}

export default Home