import './NumbersFond.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/footer/Footer';
import standart1 from '../../images/standart-1.jpg'
import standart2 from '../../images/standart-2.jpg'
import standart3 from '../../images/standart-3.jpg'
import standartRooms1 from '../../images/standart_2rooms-1.jpg'
import standartRooms2 from '../../images/standart_2rooms-2.jpg'
import standartRooms3 from '../../images/standart_2rooms-3.jpg'
import VIP1 from '../../images/vip-1.jpg'
import VIP2 from '../../images/vip-2.jpg'
import VIP3 from '../../images/vip-3.jpg'
import VIP4 from '../../images/vip-4.jpg'
import VIP5 from '../../images/vip-5.jpg'
import Header from '../header/Header';

function NumbersFound() {
    return (
        <>
        <Header />
          <div className='numbersFond'>
            <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Номерной фонд</p>
            <div className='containerFond'>
                <div className='fondItem'>
                  <p className='title'>Стандарт</p>
                  <div>
                    <p>Уютный комфортабельный однокомнатный номер площадью 16 кв.м с кроватью.</p>
                    <div >
                    <Carousel infiniteLoop showStatus={false} >
                      <div>
                        <img src={standart1} alt='slide1'/>
                      </div>
                      <div>
                        <img src={standart2} alt='slide2'/>
                      </div>
                      <div>
                        <img src={standart3} alt='slide3'/>
                      </div>
                    </Carousel>
                    </div>
                    
                    <ul className='markList'>
                      <li>Балкон / веранда</li>
                      <li>Холодильник</li>
                      <li>Вид на бассейн</li>
                      <li>Кондиционер</li>
                      <li>Телевизор</li>
                      <li>Ванная комната с душем</li>
                      <li>Завтра включен в стоимость</li>
                    </ul>
                    <button className='btn-bron'>Забронировать</button>
                  </div>
                </div>
                <div className='fondItem'>
                  <p className='title'>Стандарт двухкомнатный</p>
                  <div>
                    <p>Уютный комфортабельный двухкомнатный семейный номер площадью более  25 кв.м с одной двухспальной кроватью и двумя односпальными кроватями, холодильником, телевизором, сплит-системой. Возможно разместить до 4-х человек.</p>
                    <div >
                      <Carousel infiniteLoop showStatus={false}>
                        <div>
                          <img src={standartRooms1} alt='slide1'/>
                        </div>
                        <div>
                          <img src={standartRooms2} alt='slide2'/>
                        </div>
                        <div>
                          <img src={standartRooms3} alt='slide3'/>
                        </div>
                      </Carousel>
                    </div>
                    
                    <ul className='markList'>
                      <li>Балкон / веранда</li>
                      <li>Холодильник</li>
                      <li>Вид на бассейн</li>
                      <li>Кондиционер</li>
                      <li>Телевизор</li>
                      <li>Ванная комната с душем</li>
                      <li>Завтра включен в стоимость</li>
                    </ul>
                    <button className='btn-bron'>Забронировать</button>

                  </div>
                </div>
                <div className='fondItem'>
                  <p className='title'>VIP двухкомнатный домик</p>
                  <div>
                    <p>Уютный комфортабельный двух комнатный номер площадью более  32кв.м с кроватью, диваном, холодильником</p>
                    <div >
                    <Carousel infiniteLoop showStatus={false}>
                      <div>
                        <img src={VIP1} alt='slide1'/>
                      </div>
                      <div>
                        <img src={VIP2} alt='slide2'/>
                      </div>
                      <div>
                        <img src={VIP3} alt='slide3'/>
                      </div>
                      <div>
                        <img src={VIP4} alt='slide3'/>
                      </div>
                      <div>
                        <img src={VIP5} alt='slide3'/>
                      </div>
                    </Carousel>
                    </div>
                    
                    <ul className='markList'>
                      <li>Балкон / веранда</li>
                      <li>Холодильник</li>
                      <li>Вид на бассейн</li>
                      <li>Кондиционер</li>
                      <li>Телевизор</li>
                      <li>Ванная комната с душем</li>
                      <li>Завтра включен в стоимость</li>
                    </ul>
                    <button className='btn-bron'>Забронировать</button>

                  </div>
                </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default NumbersFound;