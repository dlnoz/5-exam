import { HeroImg1, HeroImg2 } from "../../assets/images"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePages(){

       useEffect(() => {
        AOS.init({
          duration: 1000, // animatsiya davomiyligi (ms)
          once: true, // faqat bir marta ishlasin
        });
      }, []);

    return(
        <section className="containers">
            <div className="mt-[120px] mb-[110px]">
                <div data-aos="zoom-out-up" className="flex flex-col mb-[60px] text-center gap-[10px]">
                    <h1 className="font-normal text-[40px] text-[#242F65]">Professional Home Pages</h1>
                    <p className="font-normal text-[20px] text-[#525665]">Attractive and stylish home layouts bring your portfolio website to the next level.</p>
                </div>
                <div className="flex gap-[30px]">
                    <div data-aos="fade-right" className="flex flex-col gap-[39px]">
                        <img src={HeroImg1} alt="Hero img" />
                        <span className="font-normal text-[25px] text-[#242F65] text-center">Home UX Designer</span>
                    </div>
                    <div data-aos="fade-left" className="flex flex-col gap-[39px]">
                        <img src={HeroImg2} alt="Hero img" />
                        <span className="font-normal text-[25px] text-[#242F65] text-center">Home UI Designer</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePages