import NavbarLink from './NavbarLink';
import Image from 'next/image';
import scrollTo from '../util/scrollTo';

const Navbar = (props) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl">
        <div className="flex items-center justify-start ml-4">
          <div className="flex items-center h-16 space-x-4">
            <div className="h-8 w-8">
              <Image src={props.logo} alt="logo" onClick={scrollTo('top')} />
            </div>
            {props.links.map((link, i) => {
              return <NavbarLink key={i} text={link.text} id={link.id} />;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
