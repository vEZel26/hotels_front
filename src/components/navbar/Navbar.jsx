import './Navbar.css'
import {
  Link
} from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar">
        <a className='navLink' href='/'>Главная</a>
        <a className='navLink' href='/numbers'>Номерной фонд</a>
        <a className='navLink' href='#'>Услуги</a>
        <a className='navLink' href='#'>Банкетный зал</a>
        <a className='navLink' href='#'>Для детей</a>
        <a className='navLink' href='#'>Территория</a>
        <a className='navLink' href='#'>Цены</a>
        <a className='navLink' href='#'>Отзывы</a>
        <a className='navLink' href='#'>Контакты</a>
      </nav>
    );
  }
  
  export default Navbar;
  