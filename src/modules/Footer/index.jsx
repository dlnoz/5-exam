import "./footer.css"
import { FooterBtnImg, FooterImg1, FooterImg2} from "../../assets/images"
import { RoundImg } from "../../assets/images"
import FooterWords from "../../components/FooterWords"
import Buttons from "../../components/Butttons"

function Footer(){
    const footerlist1 = ["UX Designer", "UI Designer", "Protected"]
    const footerlist2 = ["Style Guide", "Licenses", "Changelog"]
    return(
        <footer className="site-footer">
            <div class="partner-marquee flex flex-col gap-[80px]">
                <div className="flex justify-center pt-[115px]">
                    <img data-aos="zoom-out-left" src={RoundImg} alt="Round img" />
                </div>
                <div data-aos="zoom-in" class="partner-track flex gap-[70px] pt-[">
                    <div className="flex items-center gap-[10px]">
                        <img src={FooterImg1} alt="Footer round img" />
                        <span className="font-normal text-[30px] text-[#242F65]">Available for Work</span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <img src={FooterImg2} alt="Footer round img" />
                        <span className="font-normal text-[30px] text-[#242F65]">Get in Touch</span>
                    </div>
                     <div className="flex items-center gap-[10px]">
                        <img src={FooterImg1} alt="Footer round img" />
                        <span className="font-normal text-[30px] text-[#242F65]">Available for Work</span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <img src={FooterImg2} alt="Footer round img" />
                        <span className="font-normal text-[30px] text-[#242F65]">Get in Touch</span>
                    </div>
                </div>
                <span className="w-full h-[1px] bg-[#D092BA] mt-[89px]"></span>
                <div data-aos="zoom-in-up" className="flex justify-between mx-[60px] items-center">
                    <div className="flex flex-col gap-[25px]">
                        {footerlist1.map((item, index) => <FooterWords key={index} title={item}/>)}
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        {footerlist2.map((item, index) => <FooterWords key={index} title={item}/>)}
                    </div>
                    <div className="flex items-center bg-white w-[825px] px-[10px] h-[116px] rounded-[20px]">
                        <input className="w-[554px] outline-none placeholder:text-[#242F65] text-[24px]" type="text" placeholder="Interested in working together? Drop me a line"/>
                        <Buttons extraClass="bg-[#242F65] w-[187px] h-[52px] text-white text-[20px]" title={"Write Now"} img={FooterBtnImg}/>
                    </div>
                </div>
                <span className="w-full h-[1px] bg-[#D092BA]"></span>
                <div data-aos="zoom-out-up" className="containers">
                    <span className="text-[20px] text-[#242F65] font-normal">Copyright © UIUXer | Designed by</span>
                    <span className="text-[20px] text-[#242F65] font-normal">VictorFlow</span>
                    <span className="text-[20px] text-[#242F65] font-normal">Templates - Powered by</span>
                    <span className="text-[20px] text-[#242F65] font-normal">Webflow</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer