import "./footer.css"
import { FooterImg1, FooterImg2} from "../../assets/images"

function Footer(){
    return(
        <footer className="site-footer">
            <div class="partner-marquee ">
                <div class="partner-track flex gap-[70px] ">
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
                    <div className="flex items-center gap-[10px]">
                        <img src={FooterImg1} alt="Footer round img" />
                        <span className="font-normal text-[30px] text-[#242F65]">Available for Work</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer