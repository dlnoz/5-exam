import { LogoImg } from "../assets/images"
import NavLink from "./NavLink"

function Boxes({title, extraClass}){
    const navlist = ["Home", "About Me", "Pages", "Contact Us"]
    return(
        <header className={`${extraClass} w-[645px] h-[958px] rounded-[20px]`}>
            <div className="flex justify-between !pt-[15px] pl-[50px] pr-[50px]">
                <img src={LogoImg} alt="Box Header Logo Img" width={80} height={80}/>
                <nav className="flex gap-[20px]">
                    {navlist.map((item, index) => <NavLink key={index} title={item}/>)}
                </nav>
            </div>
                <div className="containers !pl-[50px]">
                    {title}
                </div>
        </header>
    )
}

export default Boxes