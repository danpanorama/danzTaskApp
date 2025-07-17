import '../../css/nav.css'
import '../../App.css'

import GeneralNavButton from "../buttons/GeneralNavButton";
import ProfileSVG from '../../assets/profile.svg'
import HeartSVG from '../../assets/heart.svg'
import CartSVG from '../../assets/carticon.svg'
import MenuIcon from '../../assets/menuIcon.svg'
import DoroLogo from '../logos/DoroLogo';


const Nav = () => {
  return (
    <nav className="navContainer flex-col-center">
      <div className="navBar flex acenter row between">
        <div className="flex-row-acenter">
          <GeneralNavButton classname={'marginRight20'} icon={ProfileSVG}  />
          <GeneralNavButton icon={HeartSVG}  />

        </div>
        <DoroLogo/>
        <div className="flex-row-acenter">
          <GeneralNavButton classname={'marginRight20'} icon={CartSVG}  />
          <GeneralNavButton icon={MenuIcon}  />

        </div>

       
      </div>
     
    </nav>
  );
};

export default Nav;
