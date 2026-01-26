import SiteLogoWhite from '../assets/site-logo-white.svg';
import SiteLogoDark from '../assets/site-logo-dark.svg';

export default function SiteLogo() {
  return (
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img src={SiteLogoWhite} alt="Site Logo" className="dark:block hidden h-12 w-auto" />
        <img src={SiteLogoDark} alt="Site Logo" className="dark:hidden block h-12 w-auto" />
      </a>        
  )
}