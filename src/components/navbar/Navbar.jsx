import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <a className='navLink' href='/'>Главная</a>
        <a className='navLink' href='/numbers'>Номерной фонд</a>
        <a className='navLink' href='/food'>Питание</a>
        <a className='navLink' href='/banket'>Банкетный зал</a>
        <a className='navLink' href='/child'>Для детей</a>
        <a className='navLink' href='/territory'>Территория</a>
        <a className='navLink' href='/money'>Цены</a>
      </nav>
    );
  }
  
  export default Navbar;
  