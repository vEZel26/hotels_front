import './ChildPage.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../../components/footer/Footer';
import deti1 from '../../images/dlya-detey-01_mn.jpeg'
import deti2 from '../../images/dlya-detey-02_mn.jpeg'
import deti3 from '../../images/dlya-detey-03_mn.jpeg'
import deti4 from '../../images/dlya-detey-04_mn.jpeg'
import deti5 from '../../images/dlya-detey-05_mn.jpeg'
import deti6 from '../../images/dlya-detey-06_mn.jpeg'
import deti7 from '../../images/dlya-detey-07_mn.jpeg'
import deti8 from '../../images/dlya-detey-08_mn.jpeg'

import Header from '../header/Header';

function ChildPage() {
    return (
        <>
        <Header />
          <div className='numbersFond'>
            <div>
              <p style={{fontSize: '46px', fontStyle: 'italic', color: 'yellowgreen'}}>Для детей</p>
              <div>
                <p style={{fontSize: '20px' }} >Загородный клуб изначально предусматривает семейный отдых.<br/>
                У нас не бывает слишком шумно, разве что от детского смеха и вскриков счастья. У нас не бывает громкой музыки и пьяных криков.<br/>
                Для детей на нашей базе отдыха предусмотрен детский бассейн. Как отдельная часть взрослого бассейна. Конечно, чистый белый песок,<br/>
                по которому приятно прогуляться не только деткам, но и взрослым. Есть отдельня песочница в тени зеленых деревьев, где Ваши детки могут поиграть,<br/>
                пока взрослые занимаются мангалом и накрывают на стол.<br/>
                Кроме выше перечисленного у нас имеется небольшая детская площадка, качели и батут! И это именно то что не оставит равнодушным ни одного ребенка.</p>
                <div className='zal-top'>
                  <img src={deti1} alt='zavtrak1' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={deti2} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={deti3} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={deti4} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                </div>
                <div className='zal-top'>
                  <img src={deti5} alt='zavtrak1' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={deti6} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={deti7} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                  <img src={deti8} alt='zavtrak2' style={{ margin: '0 10px', width: '327px' }}/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
    )
}

export default ChildPage;