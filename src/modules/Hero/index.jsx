import './hero.css';
import Buttons from '../../components/Butttons';

function Hero(){
    return(
        <section className='containers hero-section'>
            <div className="flex flex-col text-center mx-auto !pt-[50px]">
                <h1 className="font-normal text-[100px] text-[#242F65]">Tell your creativity to the world with <span className="font-normal text-[100px] text-[#FF774C]">UIUXer</span></h1>
                <p className="font-normal text-[25px] text-[#242F65] w-[500px] mx-auto">UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
            </div>
            <div className="flex justify-center gap-[10px] mt-[25px]">
                <Buttons title="Buy Template" extraClass="bg-[#FF774C] w-[266px] h-[69px] text-white"/>
                <Buttons title="Explore Page" extraClass="bg-[#7390F9] w-[266px] h-[69px] text-white"/>
            </div>
        </section>
    )
}

export default Hero