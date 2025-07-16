import "./getReady.css"
import Buttons from "../../components/Butttons"
import {GetReadyImg} from "../../assets/images"

function GetStart(){
    return(
        <section className="containers getready-section !mt-[100px] !mb-[100px]">
            <div className="flex">
                <div data-aos="zoom-out-right" className="mt-[120px] flex flex-col gap-[12px]">
                    <h1 className="font-normal text-[#242F65] text-[40px]">Ready to get start with UIUXer?</h1>
                    <p className="font-normal text-[#525665] text-[20px]">Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.</p>
                    <Buttons extraClass="bg-[#FF774C] w-[274px] h-[69px] font-normal text-white text-[18px] mt-[18px] hover:bg-transparent hover:border-[#FF774C] hover:border-[2px] hover:text-[#FF774C] duration-300" title={"Get Start Now"}/>
                </div>
                <div className="mt-[39px]">
                    <img data-aos="zoom-out-left" src={GetReadyImg} alt="Hero Img" width={1075} height={463}/>
                </div>
            </div>
        </section>
    )
}

export default GetStart