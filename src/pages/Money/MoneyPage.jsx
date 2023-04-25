import './MoneyPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/footer/Footer';


import Header from '../header/Header';

function MoneyPage() {
    return (
        <>
        <Header />
          <div className='numbersFond'>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Прейскурант цен на проживание и услуги</p>
              <div>
                <table style={{ width: '500px', margin: '0 auto' }}>
                  <tr>
                    <th>Номер</th>
                    <th>Цена</th>
                  </tr>
                  <tr>
                    <td>Стандарт</td>
                    <td>6000 рублей*</td>
                  </tr>
                  <tr>
                    <td>Стандарт улучшенный</td>
                    <td>8000 рублей*</td>
                  </tr>
                  <tr>
                    <td>Стандарт 2-х комнатный</td>
                    <td>9000 рублей*</td>
                  </tr>
                  <tr>
                    <td>VIP домик</td>
                    <td>10000 рублей*</td>
                  </tr>
                  <tr>
                    <td>Просторный VIP номер с верандой</td>
                    <td>12000 рублей*</td>
                  </tr>
                </table>
                <p>* завтрак включен в цены за номер</p>
                <p>При бронировании номера на 5 и более дней скидка 5%</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default MoneyPage;