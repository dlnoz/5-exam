import { LogoImg } from "../assets/images"
import NavLink from "./NavLink"

function MiniBoxes({title, extraClass}){
    const navlist = ["Home", "About Me", "Pages", "Contact Us"]
    return(
        <div className={`${extraClass} w-[645px] h-[377px] rounded-[20px]`}>
            <header className="flex justify-between !pt-[15px] pl-[50px] pr-[50px]">
                <img src={LogoImg} alt="Box Header Logo Img" width={80} height={80}/>
                <nav className="flex gap-[20px]">
                    {navlist.map((item, index) => <NavLink key={index} title={item}/>)}
                </nav>
            </header>
            <div className="pl-[50px]">
                {title}
            </div>
        </div>
    )
}

export default MiniBoxes