import { useEffect, useState } from 'react'
import './modal.css'


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
    const [dateStart, setDateStart] = useState()
    const [dateEnd, setDateEnd] = useState()


    useEffect(() => {
        console.log(dateStart)
    }, [dateStart])
    return (
        <div className="wrap-modal">
            <div className='content-modal'>
            <div>
                <button onClick={() => props.setVisible(false)} style={{position: 'absolute', left: 0, top: 0}}>Close</button>
                <text style={{fontSize: '26px', fontStyle: 'italic'}}>{nubmberTitle(props.type)}</text>
            </div>
            <div className='form-reserved'>
                <input type='text' placeholder='Введите имя' className='input-reserved' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Введите телефон' className='input-reserved' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type='text' placeholder='Введите почту' className='input-reserved' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='date' placeholder='Выберите дату въезда' className='input-reserved' value={dateStart} onChange={(e) => setDateStart(e.target.value)}/>
                <input type='date' placeholder='Выберите дату выезда' className='input-reserved' value={dateEnd} onChange={(e) => setDateEnd(e.target.value)}/>
            </div>
            <button className='btn-bron'>Забронировать</button>
            </div>
            
        </div>
    )
}

export default ModalNumber;