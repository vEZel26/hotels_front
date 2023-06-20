import './Header.css'
import background from '../../images/wood-background.jpg'
import logo from '../../images/logo1.png'
import Navbar from '../../components/navbar/Navbar';

function Header() {
    return (
      <div className="Header" style={{ backgroundImage: `url(${background})`}}>
        <img src={logo} alt='logo' className='logo'/>
        <p className='text' style={{color: '#ece911'}}></p>
        <Navbar />
      </div>
    );
  }
  
  export default Header;
  