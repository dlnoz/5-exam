import { HeroImg3, HeroImg4 } from "../../assets/images"

function Studies(){
    return(
        <section className="bg-slate-200 pt-[120px] pb-[120px]">
            <div className="containers">
                <div>
                    <div data-aos="fade-down-right" className="text-center flex flex-col gap-[10px] mb-[60px]">
                        <h1 className="font-normal text-[40px] text-[#242F65]">Stunning Case Studies</h1>
                        <p className="font-normal text-[20px] text-[#525665]">Create an optimal visual experience for your users with these inspiring layouts.</p>
                    </div>
                    <div className="flex gap-[30px]">
                        <div data-aos="zoom-in-right" className="flex flex-col gap-[39px]">
                            <img src={HeroImg3} alt="Hero img" width={645} height={958}/>
                            <span className="font-normal text-[25px] text-[#242F65] text-center">Case Study Single - Web</span>
                        </div>

                        <div data-aos="zoom-out" className="flex flex-col gap-[39px]">
                            <img src={HeroImg4} alt="Hero img" width={645} height={958}/>
                            <span className="font-normal text-[25px] text-[#242F65] text-center">Case Study Single - Mobile</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studies