import './TerritoryPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/footer/Footer';
import ter1 from '../../images/territoy-dacha-01_mn.jpeg'
import ter2 from '../../images/territoy-dacha-02_mn.jpeg'
import ter3 from '../../images/territoy-dacha-03_mn.jpeg'
import ter4 from '../../images/territoy-dacha-04_mn.jpeg'
import ter5 from '../../images/territoy-dacha-05_mn.jpeg'
import ter6 from '../../images/territoy-dacha-06_mn.jpeg'
import ter7 from '../../images/territoy-dacha-07_mn.jpeg'
import ter8 from '../../images/territoy-dacha-08_mn.jpeg'


import Header from '../header/Header';

function TerritoryPage() {
    return (
        <>
        <Header />
          <div className='numbersFond'>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Территория Клуба</p>
              <div>
                <p style={{fontSize: '20px' }} > Территория загородного клуба, делится на две части.<br/>
                Первая это бассейн и кафе, зона для релакса и загара.<br/>
                Вторая — это зона отдыха, беседки, красивый сад, мангальная зона.<br/></p>
                <div className='zal-top'>
                  <img src={ter1} alt='zavtrak1' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={ter2} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={ter3} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={ter4} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                </div>
                <div className='zal-top'>
                  <img src={ter5} alt='zavtrak1' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={ter6} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={ter7} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={ter8} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default TerritoryPage;