import Boxes from "../../components/Boxes"
import MiniBoxes from "../../components/MiniBoxes"
import {HeroImg9, HeroImg10, HeroImg11, HeroImg12, HeroImg13} from "../../assets/images"

function Utility(){
    return(
        <section className="bg-[#2A2C32] pt-[120px] pb-[110px]">
            <div className="containers">
                <div className="flex flex-col gap-[10px] text-center mb-[60px]">
                    <h1 className="text-white font-normal text-[40px]">Utility Pages</h1>
                    <p className="text-white font-normal text-[20px]">Default templates for your site & you can customize these pages to look the way you want.</p>
                </div>
                <div className="flex gap-[30px]">
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg9} alt="Hero img" width={645} height={397}/>
                        <span className="font-normal text-[25px] text-white text-center">Changelog</span>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg10} alt="Hero img" width={645} height={397}/>
                        <span className="font-normal text-[25px] text-white text-center">Protected Page</span>
                    </div>
                </div>
                <div className="mt-[85px] flex gap-[30px]">
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg11} alt="Hero img" width={645} height={847}/>
                        <span className="font-normal text-[25px] text-white text-center">Licenses</span>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg12} alt="Hero img" width={645} height={847 }/>
                        <span className="font-normal text-[25px] text-white text-center">Style Guide</span>
                    </div>
                </div>
                <div className="mt-[86px] flex flex-col gap-[39px] w-[645px]">
                    <img src={HeroImg13} alt="Hero img" width={645} height={397}/>
                    <span className="font-normal text-[25px] text-white text-center">404 Error Page</span>
                </div>
            </div>
        </section>
    )
}

export default Utility