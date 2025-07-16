import Boxes from "../../components/Boxes"
import { HeroImg5, HeroImg6, HeroImg7, HeroImg8} from "../../assets/images"

function Support(){
    return(
        <section className="containers">
            <div className="mt-[120px] mb-[110px] text-center">
                <div className="flex flex-col gap-[10px] mb-[60px]">
                    <h1 className="font-normal text-[40px] text-[#242F65]">Supportive Pages</h1>
                    <p className="font-normal text-[20px] text-[#525665]">Feel the feature of creativity with these inner page layouts that perfectly match your site.</p>
                </div>

                <div className="flex gap-[30px] mb-[86px]">
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg5} alt="Hero img" width={645} height={881}/>
                        <span className="font-normal text-[25px] text-[#242F65]">About Me</span>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg6} alt="Hero img" width={645} height={881}/>
                        <span className="font-normal text-[25px] text-[#242F65]">Blog</span>
                    </div>
                </div>

                <div className="flex gap-[30px]">
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg7} alt="Hero img" width={645} height={881}/>
                        <span className="font-normal text-[25px] text-[#242F65]">Blog Single</span>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg8} alt="Hero img" width={645} height={881}/>
                        <span className="font-normal text-[25px] text-[#242F65]">Contact Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support