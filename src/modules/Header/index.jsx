import {LogoImg} from "../../assets/images"
import NavLink from "../../components/NavLink"

function Header() {
    const navlist = ["Home", "About Me", "Pages", "Contact Us"]
    return(
        <header className="containers !mt-[50px] !p-[15px] !mb-[35px]">
          <div className="containers flex items-center justify-between">
             <img src={LogoImg} alt="logo img " width={176} height={41}/>
             <nav className="flex gap-[82px] items-center">
              {navlist.map((item, index) => <NavLink className="hover:text-amber-300" key={index} title={item}/>)}
             </nav>
          </div>
        </header>
    )
}

export default Header
