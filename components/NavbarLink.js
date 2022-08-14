import scrollTo from '../util/scrollTo';

const NavbarLink = (props) => {
  return (
    <a
      href={`#${props.id}`}
      className="text-gray-300 focus:text-gray-700 bg-gray-700 focus:bg-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      onClick={scrollTo(props.id)}
    >
      {props.text}
    </a>
  );
};

export default NavbarLink;
