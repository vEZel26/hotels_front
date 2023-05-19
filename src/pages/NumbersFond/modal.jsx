import { useEffect, useState } from 'react'
import './modal.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CloseIcon from '../../images/close.png'
import Success from '../../images/success.png'
import axios from 'axios';




function ModalNumber(props) {
    
    const nubmberTitle = (type) => {
        switch (type) {
            case 'standart':
                return 'Стандарт'
            case 'standart-2-room':
                return 'Стандарт двухкомнатный'
            case 'VIP': 
                return 'VIP двухкомнатный домик'
            default:
                return 'Стандарт'
        } 
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState(new Date())
    const [disabledDate, setDisabledDate] = useState()
    const [error, setError] = useState(false)
    const [successModal, setSuccessModal] = useState(false)


    async function fetchData() {
        const response = await axios.get(`http://localhost:8000/data_reserved?type=${nubmberTitle(props.type)}`);
        setDisabledDate(response.data.map(item => new Date(item).getTime()));
    };

    useEffect(() => {
        fetchData()
    }, [])

    const tileDisabled = ({date}) => {
        if (disabledDate) {
            return disabledDate.includes(date.getTime()) 
            
        }
    }

    const dateToServerFormat = (date) => {
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    }

    const reserved = async () => {
        try {
            await axios.post(`http://localhost:8000/numbers/`, {
                type: nubmberTitle(props.type),
                date_start_reserved: dateToServerFormat(dateStart),
                date_end_reserved: dateToServerFormat(dateEnd),
                email_reserved: email,
                phone_reserved: phone,
                name: name
    
            })
            setError(false)
            setSuccessModal(true)
        } catch {
            setError(true)
        }
        
    }

    return (
        <div className="wrap-modal">
            <div className='content-modal'>
            <div>
                <button onClick={() => props.setVisible(false)} style={{position: 'absolute', left: 0, top: 0, height: '35px', width: '35px', background: 'none', border: 'none'}}><img src={CloseIcon} alt='close' style={{height: '35px', width: '35px'}}/></button>
                <text style={{fontSize: '26px', fontStyle: 'italic'}}>{nubmberTitle(props.type)}</text>
            </div>
            <div className='form-reserved'>
                <input type='text' placeholder='Введите имя' className='input-reserved' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Введите телефон' className='input-reserved' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type='text' placeholder='Введите почту' className='input-reserved' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div>
                  <text>Дата въезда</text>
                  <Calendar onChange={setDateStart} value={dateStart} tileDisabled={tileDisabled}/>
                </div>
                <div>
                    <text>Дата выезда</text>
                    <Calendar onChange={setDateEnd} value={dateEnd} tileDisabled={tileDisabled}/>
                </div>
            </div>
            <button className='btn-bron' onClick={() => reserved()}>Забронировать</button>
            {error && (<text style={{display: 'block', color: 'red'}}>Что-то пошло не так, попробуйте ещё раз</text>)}
            </div>
            {successModal && (
                <div className="wrap-modal">
                    <div className='content-modal'>
                    <button onClick={() => {
                        setSuccessModal(false)
                        props.setVisible(false)}
                        } style={{position: 'absolute', left: 0, top: 0, height: '35px', width: '35px', background: 'none', border: 'none'}}><img src={CloseIcon} alt='close' style={{height: '35px', width: '35px'}}/></button>
                        <div style={{margin: '50% auto'}}>
                            <img src={Success} alt='' style={{width: '150px', height: '150px'}}/>
                            <text style={{fontSize: '36px', display: 'block', fontStyle: 'italic'}}>Успешно забронировано</text>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalNumber;