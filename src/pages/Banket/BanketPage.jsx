import './BanketPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/footer/Footer';
import zal1 from '../../images/001.jpeg'
import zal2 from '../../images/002.jpeg'
import zal3 from '../../images/mal1_mn.jpeg'
import zal4 from '../../images/mal2_mn.jpeg'
import zal5 from '../../images/mal3_mn.jpeg'


import Header from '../header/Header';

function BanketPage() {
    return (
        <>
        <Header />
          <div className='numbersFond'>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Банкетный зал</p>
              <div>
                <p style={{fontSize: '20px' }} > Банкетный зал в Раздорах — проведение мероприятий, свадеб, дней рождений.</p>
                <div className='zal-top'>
                  <img src={zal1} alt='zavtrak1' style={{ margin: '0 10px', width: '500px' }}/>
                  <img src={zal2} alt='zavtrak2' style={{ margin: '0 10px', width: '500px' }}/>
                </div>
                <div className='zal-top'>
                  <img src={zal3} alt='zavtrak1' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={zal4} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={zal5} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default BanketPage;