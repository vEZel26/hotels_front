import './Footer.css'
import Navbar from '../../components/navbar/Navbar';

function Footer() {
    return (
      <div className="Footer" style={{ backgroundColor: 'gray'}}>
        <div style={{ backgroundColor: '#59493f', width: '100%'}}>
          <p className='text'>Позвоните нам и Мы с радостью ответим на все ваши вопросы!</p>
          <p style={{color: 'yellow', fontSize: '26px'}}>+7 (999) 999-99-99</p>
        </div>
        <Navbar />
      </div>
    );
  }
  
  export default Footer;
  