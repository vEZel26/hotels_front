import Header from '../header/Header';
import './MainPage.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../../images/slide-1.jpg'
import slide2 from '../../images/slide-2.jpg'
import slide3 from '../../images/slide-3.jpg'
import slide4 from '../../images/slide-4.jpg'
import heal from '../../images/heal.png'
import background from '../../images/wood-background.jpg'
import Footer from '../../components/footer/Footer';


function MainPage() {
    return (
      <>
        <Header/>
        <div className="MainPage" style={{ backgroundImage: `url(${background})`}}>
          <Carousel infiniteLoop showStatus={false}>
            <div>
              <img src={slide1} alt='slide1'/>
              <p className="legend">Добро пожаловать на сайт Загородного клуба "Дача" </p>
            </div>
            <div>
              <img src={slide2} alt='slide2'/>
              <p className="legend">Современный комплекс для хорощего отдыха </p>
            </div>
            <div>
              <img src={slide3} alt='slide3'/>
              <p className="legend">Современные и уютные номера </p>
            </div>
            <div>
              <img src={slide4} alt='slide4'/>
              <p className="legend">Большой бассейн! </p>
            </div>
          </Carousel>
          <div>
          <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Преимущества</p>
          <div className='advantagesContainer'>
              <div className='advantagesItem'>
                <div className='iconAdv'>
                  <img src={heal} alt='icon' style={{ width: '45px', height: '45px', margin: '20% 20%'}}/>
                </div>
                <p style={{ fontSize: '22px', fontStyle: 'italic', color: 'yellowgreen', marginBottom: '0'}}>Безопасный отдых</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Территория базы отдыха охраняется.</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Опытные инструкторы и спасатели.</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Детский огороженный бассейн.</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Детская игровая площадка</p>
              </div>
              <div className='advantagesItem'>
                <div className='iconAdv'>
                  <img src={heal} alt='icon' style={{ width: '45px', height: '45px', margin: '20% 20%'}}/>
                </div>
                <p style={{ fontSize: '22px', fontStyle: 'italic', color: 'yellowgreen', marginBottom: '0'}}>Питание</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Завтрак входит в стоимость</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Возможно заказать отдельно обед и ужин</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Открытое и закрытое кафе</p>
              </div>
              <div className='advantagesItem'>
                <div className='iconAdv'>
                  <img src={heal} alt='icon' style={{ width: '45px', height: '45px', margin: '20% 20%'}}/>
                </div>
                <p style={{ fontSize: '22px', fontStyle: 'italic', color: 'yellowgreen', marginBottom: '0'}}>Отдых</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Пляж, бассейн, десткая площадка</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Музыка, водные прогулки, катер</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Рыбалка и охота</p>
              </div>
              <div className='advantagesItem'>
                <div className='iconAdv'>
                  <img src={heal} alt='icon' style={{ width: '45px', height: '45px', margin: '20% 20%'}}/>
                </div>
                <p style={{ fontSize: '22px', fontStyle: 'italic', color: 'yellowgreen', marginBottom: '0'}}>Дополнительные услуги</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Русская баня на дровах</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Комната отдыха до/после бани</p>
                <p style={{ fontSize: '16px', color: 'yellowgreen', marginBottom: '0'}}>Безалкогольные напитки</p>
              </div>
          </div>
          </div>
        </div>
        <Footer />
      </>

    );
  }
  
  export default MainPage;
  