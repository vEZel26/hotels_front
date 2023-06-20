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
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Прейскурант цен на проживание</p>
              <div>
                <table style={{ width: '500px', margin: '0 auto' }}>
                  <tr>
                    <th style={{fontSize: '20px' }} > Номер</th>
                    <th style={{fontSize: '20px' }} >Цена</th>
                  </tr>
                  <tr>
                  <td style={{fontSize: '20px' }} >Стандарт</td>
                    <td style={{fontSize: '20px' }} >6000 рублей*</td>
                  </tr>
                  <tr>
                    <td style={{fontSize: '20px' }} > Стандарт 2-х комнатный</td>
                    <td style={{fontSize: '20px' }} > 9000 рублей*</td>
                  </tr>
                  <tr>
                  <td style={{fontSize: '20px' }} > VIP домик</td>
                  <td style={{fontSize: '20px' }} > 10000 рублей*</td>
                  </tr>
                </table>
                <p style={{fontSize: '20px' }} >* завтрак включен в цены за номер</p>
                <p style={{fontSize: '20px' }} >При бронировании номера на 5 и более дней скидка 5%</p>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default MoneyPage;