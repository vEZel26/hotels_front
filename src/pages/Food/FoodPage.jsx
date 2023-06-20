import './FoodPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/footer/Footer';
import zavtrak1 from '../../images/zavtrak-01.jpeg'
import zavtrak2 from '../../images/zavtrak-02.jpeg'
import cafe1 from '../../images/kafe-restoran-razdory-01.jpeg'
import cafe2 from '../../images/ulichnoe-kafe-v-razdorah-02.jpeg'
import cafe3 from '../../images/dacha-razdory-007.jpeg'
import cafe4 from '../../images/dacha-razdory-008.jpeg'

import Header from '../header/Header';

function FoodPage() {
    return (
        <>
        <Header />
          <div className='numbersFond'>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Питание</p>
              <div>
                <p style={{fontSize: '20px' }} >Завтрак входит в стоимость оплаты всех номеров</p>
                <div>
                  <img src={zavtrak1} alt='zavtrak1' style={{ margin: '0 10px'}}/>
                  <img src={zavtrak2} alt='zavtrak2' />
                </div>
              </div>
            </div>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Уличное кафе под навесом</p>
              <div>
                <p style={{fontSize: '20px' }} >Завтраки, включенные в стоимость оплаты каждого номера проходят в открытом кафе или в ресторане.</p>
                <p style={{fontSize: '20px' }} >Уличное кафе предлагает своим гостям прохладительные напитки и легкие закуски.</p>
                <div>
                  <img src={cafe1} alt='cafe1' style={{ margin: '0 10px'}}/>
                  <img src={cafe2} alt='cafe2' />
                </div>
              </div>
            </div>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Кафе-ресторан</p>
              <div>
                <p style={{fontSize: '20px' }} > Утренние завтраки включенные в стоимость каждого номера, проходят в помещении ресторана или на открытой веранде-кафе.</p>
                <p style={{fontSize: '20px' }} > Посетители нашего Загородного Клуба всегда могут заказать блюда по меню. Есть детское меню.</p>
                <div>
                  <img src={cafe3} alt='cafe1' style={{ margin: '0 10px'}}/>
                  <img src={cafe4} alt='cafe2' />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default FoodPage;