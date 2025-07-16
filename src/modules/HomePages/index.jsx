import Boxes from "../../components/Boxes"
import { HeroImg1, HeroImg2 } from "../../assets/images"

function HomePages(){
    return(
        <section className="containers">
            <div className="mt-[120px] mb-[110px]">
                <div  className="flex flex-col mb-[60px] text-center gap-[10px]">
                    <h1 className="font-normal text-[40px] text-[#242F65]">Professional Home Pages</h1>
                    <p className="font-normal text-[20px] text-[#525665]">Attractive and stylish home layouts bring your portfolio website to the next level.</p>
                </div>
                <div className="flex gap-[30px]">
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg1} alt="Hero img" />
                        <span className="font-normal text-[25px] text-[#242F65] text-center">Home UX Designer</span>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                        <img src={HeroImg2} alt="Hero img" />
                        <span className="font-normal text-[25px] text-[#242F65] text-center">Home UI Designer</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePages