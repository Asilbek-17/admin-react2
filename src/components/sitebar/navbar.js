import "./navbar.css";
import { Dashboard } from "../iconsImgs/iconLogo";
import { Moreicon } from "../iconsImgs/iconMore";
export function SiteNavbar() {
  return (
    <div className='col-2 navbars'>
      <div className='navbar-boss'>
        <div>
          <a className='textHreft__logo' href='/public/index.html'>
            <Dashboard />
            <span className='logo__text'>Dashboard Kit</span>
          </a>
        </div>
        <ul className='iconList list-unstyled'>
          <Moreicon />
        </ul>
      </div>
    </div>
  );
}
