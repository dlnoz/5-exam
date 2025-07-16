import './hero.css';
import Buttons from '../../components/Butttons';
import { HeroRoundImg } from '../../assets/images';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero(){

    useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (ms)
      once: true, // faqat bir marta ishlasin
    });
  }, []);
    return(
        <section className='containers hero-section'>
            <div className="flex flex-col text-center mx-auto !pt-[50px] ">
                <h1 data-aos="flip-up"  className="font-normal fontt text-[100px] text-[#242F65]">Tell your creativity to the world with <span className="font-normal text-[100px] text-[#FF774C]">UIUXer</span></h1>
                <p data-aos="zoom-in" className="font-normal text-[25px] text-[#242F65] w-[500px] mx-auto">UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
            </div>
            <div className="flex justify-center gap-[10px] mt-[25px]">
                <div data-aos="zoom-in-right">
                    <Buttons data-aos="fade-right" title="Buy Template" extraClass="bg-[#FF774C] w-[266px] h-[69px] text-white cursor-pointer hover:bg-transparent hover:text-[#FF774C] hover:border-[#FF774C] hover:border-[2px]"/>
                </div>
                <div data-aos="zoom-in-left">
                    <Buttons title="Explore Page" extraClass="bg-[#7390F9] w-[266px] h-[69px] text-white cursor-pointer hover:bg-transparent hover:text-[#7390F9] hover:border-[#7390F9] hover:border-[2px]"/>
                </div>
            </div>
            <div className="flex justify-center pt-[115px]">
                <img data-aos="zoom-out-right" src={HeroRoundImg} alt="Hero Round Img" />
            </div>
        </section>
    )
}

export default Hero