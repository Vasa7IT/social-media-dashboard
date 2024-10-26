import './navIcon.css';

const NavIcon = ({Icon,title,onClick}) => {
  return (
    <div className="smd__navIcon"  onClick={onClick}>
        {Icon && <Icon className="icon" />} 
        <h2>{title?title:null}</h2>
    </div>
  );
};

export default NavIcon;
